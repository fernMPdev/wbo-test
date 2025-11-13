import * as S from './styled'
import Input from '@form/Input'
import Textarea from '@form/Textarea'
import Button from '@atoms/Button'
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useCallback, useRef, useState } from 'react'
import validators from 'validations/validators'
import { defaultValues } from './defaultValues'
import FileInput from '@form/FileInput'
import ReCAPTCHA from 'react-google-recaptcha'

const schema = Joi.object({
  name: validators.name,
  surnames: validators.surnames,
  email: validators.email,
  phone: validators.phone,
  message: validators.message,
  github: validators.github,
  linkedin: validators.linkedin,
  file: validators.fileOptional
})

function ContactForm() {
  const recaptchaRef = useRef()
  const [notification, setNotification] = useState({ type: '', message: '' })
  const [isRecaptchaValid, setIsRecaptchaValid] = useState(false)

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

  const file = watch('file')
  const fileName = file?.[0]?.name || ''

  const resetForm = useCallback(() => {
    reset(defaultValues)
    recaptchaRef.current.reset()
    setIsRecaptchaValid(false)
  }, [reset])

  const onSubmit = async (data) => {
    if (isSubmitting) return
    setNotification({ type: '', message: '' })

    try {
      const token = recaptchaRef.current.getValue()
      if (!token) {
        return
      }
      const appends = ['name', 'surnames', 'github', 'linkedin', 'email', 'phone', 'message']
      const formData = new FormData()

      appends.forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key])
        }
      })

      if (data.file && data.file[0]) {
        formData.append('file', data.file[0])
      }
      formData.append('token', token)

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

      setNotification({ type: 'success', message: 'Mensaje enviado ' })
      resetForm()
    } catch (err) {
      setNotification({ type: 'error', message: 'Error de conexión, inténtalo más tarde' })
    }
  }

  const isButtonDisabled = isSubmitting || Object.keys(errors).length > 0

  return (
    <S.Root>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Input>
          <Input {...register('name')} placeholder='Nombre' errors={errors.name} />
        </S.Input>
        <S.Input>
          <Input {...register('surnames')} placeholder='Apellidos' errors={errors.surnames} />
        </S.Input>
        <S.Input>
          <Input {...register('email')} placeholder='Email' errors={errors.email} />
        </S.Input>
        <S.Input>
          <Input {...register('phone')} placeholder='Teléfono' errors={errors.phone} />
        </S.Input>
        <S.Input>
          <Input {...register('github')} placeholder='Github (opcional)' />
        </S.Input>
        <S.Input>
          <Input {...register('linkedin')} placeholder='Perfil de Linkedin (opcional)' />
        </S.Input>
        <FileInput {...register('file')} name='file' fileName={fileName} error={errors.file} />
        <S.Input>
          <Textarea {...register('message')} placeholder='Mensaje' errors={errors.message} />
        </S.Input>

        {notification.message && (
          <p style={{ color: notification.type === 'error' ? 'red' : 'green', marginTop: 8 }}>
            {notification.message}
          </p>
        )}

        <S.Input>
          <S.ButtonContainer>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              ref={recaptchaRef}
              onChange={(token) => setIsRecaptchaValid(!!token)}
            />
            <div>
              <Button
                size='small'
                variant='solid.positive'
                type='submit'
                disabled={isButtonDisabled || !isRecaptchaValid}
                loading={isSubmitting}
              >
                Enviar
              </Button>
            </div>
          </S.ButtonContainer>
        </S.Input>
      </form>
    </S.Root>
  )
}

export default ContactForm
