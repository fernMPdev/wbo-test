import * as S from './styled'
import Text from '@atoms/Text'
import Input from '@form/Input'
import { useForm } from 'react-hook-form'
import Textarea from '@form/Textarea'
import FileInput from '@form/FileInput'
import Joi from 'joi'
import validators from 'validations/validators'
import { joiResolver } from '@hookform/resolvers/joi'
import { useCallback, useRef, useState } from 'react'
import { defaultValues } from './defaultValues'
import Button from '@atoms/Button'
import ReCAPTCHA from 'react-google-recaptcha'

const schema = Joi.object({
  name: validators.name,
  surnames: validators.surnames,
  email: validators.email,
  phone: validators.phone,
  message: validators.message,
  github: validators.github,
  linkedin: validators.linkedin,
  file: validators.file,
  coverLetter: validators.fileOptional,
  position: Joi.optional()
})

const Form = ({ position }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm({
    resolver: joiResolver(schema)
  })

  const recaptchaRef = useRef()
  const [notification, setNotification] = useState({ type: '', message: '' })
  const [isRecaptchaValid, setIsRecaptchaValid] = useState(false)

  const file = watch('file')
  const coverLetter = watch('coverLetter')
  const fileNameResume = file?.[0]?.name || ''
  const fileNameCoverLetter = coverLetter?.[0]?.name || ''

  const resetForm = useCallback(() => {
    reset(defaultValues)
    recaptchaRef.current.reset()
    setIsRecaptchaValid(false)
  }, [reset])

  const onSubmit = async (data) => {
    if (isSubmitting) return
    setNotification({ type: '', message: '' })

    const token = recaptchaRef.current.getValue()
    if (!token) {
      return
    }

    try {
      const formData = new FormData()
      formData.append('position', position)
      formData.append('token', token)

      const appends = ['name', 'surnames', 'github', 'linkedin', 'email', 'phone', 'message']
      appends.forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key])
        }
      })

      if (data.file && data.file[0]) {
        formData.append('file', data.file[0])
      }
      if (data.coverLetter && data.coverLetter[0]) {
        formData.append('coverLetter', data.coverLetter[0])
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      })

      const result = await res.json()

      if (!res.ok) {
        if (result.errors && Array.isArray(result.errors) && result.errors.length > 0) {
          result.errors.forEach((detail) => {
            setError(detail.field, { message: detail.message })
          })
        } else {
          setNotification({
            type: 'error',
            message: result.error || 'Error desconocido, inténtalo más tarde'
          })
        }
        return
      }
      setNotification({ type: 'success', message: 'Mensaje enviado correctamente' })
      resetForm()
    } catch (err) {
      setNotification({ type: 'error', message: 'Error de conexión, inténtalo más tarde' })
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <S.FormSectionTitle>
          <Text tag='h2' font='title.40' color='text.strong'>
            Información Personal
          </Text>
        </S.FormSectionTitle>
        <S.FormRow>
          <S.InputGroup>
            <div>
              <S.Label htmlFor='name' required>
                Nombre
              </S.Label>
              <Input {...register('name')} placeholder='Nombre' errors={errors.name} />
            </div>
            <div>
              <S.Label htmlFor='surnames' required>
                Apellidos
              </S.Label>
              <Input {...register('surnames')} placeholder='Apellidos' errors={errors.surnames} />
            </div>
          </S.InputGroup>
        </S.FormRow>
        <S.FormRow>
          <S.InputGroup>
            <div>
              <S.Label htmlFor='email' required>
                Email
              </S.Label>
              <Input {...register('email')} placeholder='Email' errors={errors.email} />
            </div>
            <div>
              <S.Label htmlFor='phone' required>
                Teléfono
              </S.Label>
              <Input {...register('phone')} placeholder='Teléfono' errors={errors.phone} />
            </div>
          </S.InputGroup>
        </S.FormRow>
      </div>
      <div>
        <S.FormSectionTitle>
          <Text tag='h2' font='title.40' color='text.strong'>
            Perfiles
          </Text>
        </S.FormSectionTitle>
        <S.FormRow>
          <S.InputGroup>
            <div>
              <S.Label htmlFor='linkedin'>Linkedin</S.Label>
              <Input {...register('linkedin')} placeholder='Linkedin' errors={errors.linkedin} />
            </div>
            <div>
              <S.Label htmlFor='github'>Github</S.Label>
              <Input {...register('github')} placeholder='Github' errors={errors.github} />
            </div>
          </S.InputGroup>
        </S.FormRow>
      </div>
      <div>
        <S.FormSectionTitle>
          <Text tag='h2' font='title.40' color='text.strong'>
            Curriculum Vitae
          </Text>
        </S.FormSectionTitle>
        <S.FormRow>
          <S.InputGroup>
            <div>
              <S.Label htmlFor='github' required>
                Curriculum Vitae
              </S.Label>
              <FileInput
                {...register('file')}
                name='file'
                fileName={fileNameResume}
                error={errors?.file}
              />
            </div>
            <div>
              <S.Label htmlFor='github'>Carta de presentacion</S.Label>
              <FileInput
                {...register('coverLetter')}
                name='coverLetter'
                fileName={fileNameCoverLetter}
                error={errors?.coverLetter}
              />
            </div>
          </S.InputGroup>
        </S.FormRow>
      </div>
      <div>
        <S.FormSectionTitle>
          <Text tag='h2' font='title.40' color='text.strong'>
            Un mensaje para el equipo de Whitebox Office
          </Text>
        </S.FormSectionTitle>
        <S.FormRow>
          <S.InputGroup $fullWidth>
            <div>
              <S.Label htmlFor='message' required>
                ¿Qué te gustaría que supiéramos de ti?
              </S.Label>
              <Textarea {...register('message')} placeholder='Mensaje' errors={errors.message} />
            </div>
          </S.InputGroup>
        </S.FormRow>
      </div>
      {notification.message && (
        <p style={{ color: notification.type === 'error' ? 'red' : 'green', marginTop: 8 }}>
          {notification.message}
        </p>
      )}
      <S.SubmitContainer>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
          onChange={(token) => setIsRecaptchaValid(!!token)}
        />
        <>
          <Button
            size='small'
            variant='solid.positive'
            type='submit'
            loading={isSubmitting}
            disabled={isSubmitting || !isRecaptchaValid}
          >
            Enviar
          </Button>
        </>
      </S.SubmitContainer>
    </S.Form>
  )
}

export default Form
