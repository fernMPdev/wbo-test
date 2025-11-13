import escape from 'escape-html'
import Joi from 'joi'
import { MulterError } from 'multer'
import { htmlEmail } from 'lib/emailTemplates'
import { mailOptions, transporter } from 'lib/nodemailer'
import { runMiddleware, upload } from 'lib/multer'
import validators from 'validations/validators'
import { fileTypeFromBuffer } from 'file-type'
import { rateLimiter } from '@lib/rateLimiter'
import { getClientIp } from '@lib/getClientIp'

// Deshabilita el bodyParser de Next.js para que multer pueda procesar multipart/form-data
export const config = {
  api: {
    bodyParser: false
  }
}

const sanitizeFilename = (filename) => {
  return filename.replace(/[^a-z0-9.\-_]/gi, '_')
}

const validateFile = async (file) => {
  if (!file) return

  const extension = file.originalname.split('.').pop().toLowerCase()
  if (extension !== 'pdf') {
    throw new Error('Solo se permiten archivos PDF')
  }

  const detectedType = await fileTypeFromBuffer(file.buffer)
  if (!detectedType || detectedType.mime !== 'application/pdf') {
    throw new Error('El archivo no tiene un formato permitido')
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const ip = getClientIp(req)

  try {
    await rateLimiter.consume(ip)
  } catch {
    return res.status(429).json({ error: 'Demasiadas solicitudes, inténtalo más tarde' })
  }

  try {
    await runMiddleware(
      req,
      res,
      upload.fields([
        { name: 'file', maxCount: 1 },
        { name: 'coverLetter', maxCount: 1 }
      ])
    )

    const { token } = req.body

    if (!token || typeof token !== 'string') {
      return res.status(400).json({ error: 'Token de reCAPTCHA inválido o faltante' })
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY
    if (!secret) {
      return res.status(500).json({ error: 'Fallo de configuración del servidor (RECAPTCHA)' })
    }

    const params = new URLSearchParams()
    params.append('secret', secret)
    params.append('response', token)
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    })
    const data = await verifyRes.json()
    if (!data.success) {
      return res.status(400).json({ error: 'Verificación de reCAPTCHA fallida' })
    }

    const bodySchema = Joi.object({
      name: validators.name,
      surnames: validators.surnames,
      email: validators.email,
      phone: validators.phone,
      message: validators.message,
      github: validators.github,
      linkedin: validators.linkedin,
      position: Joi.optional(),
      token: Joi.string().required()
    })
    const { error: bodyError } = bodySchema.validate(req.body, { abortEarly: false })

    if (bodyError) {
      const errors = bodyError.details.map((detail) => ({
        field: detail.path[0],
        message: detail.message
      }))

      return res.status(400).json({ errors })
    }

    const file = req.files?.file?.[0]
    const coverLetter = req.files?.coverLetter?.[0]

    if (file) await validateFile(file)
    if (coverLetter) await validateFile(coverLetter)

    const { name, surnames, email, phone, message, github, linkedin, position } = req.body

    const attachments = []
    if (file) {
      attachments.push({
        filename: sanitizeFilename(file.originalname),
        content: file.buffer
      })
    }

    if (coverLetter) {
      attachments.push({
        filename: sanitizeFilename(coverLetter.originalname),
        content: coverLetter.buffer
      })
    }

    const subject = position
      ? `Inscripción a ${position}`
      : `Nuevo mensaje de contacto de ${escape(name)}`

    await transporter.sendMail({
      ...mailOptions,
      replyTo: email,
      subject: subject,
      html: htmlEmail({
        name: escape(name),
        surnames: escape(surnames),
        email: escape(email),
        phone: escape(phone),
        message: escape(message),
        github: escape(github),
        linkedin: escape(linkedin)
      }),
      attachments
    })

    return res.status(200).json({ success: true, message: 'Correo enviado correctamente' })
  } catch (error) {
    console.error('Error al procesar solicitud:', error.message)

    if (error instanceof MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'El archivo es demasiado grande.' })
      }
      if (error.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({ error: 'El tipo de archivo no está permitido.' })
      }
    }

    if (
      error.message?.includes('archivo no tiene un formato permitido') ||
      error.message?.includes('Solo se permiten archivos PDF')
    ) {
      return res.status(400).json({ error: error.message })
    }

    return res.status(500).json({ error: 'Error interno del servidor al procesar la solicitud.' })
  }
}
