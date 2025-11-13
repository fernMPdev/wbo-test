import Joi from 'joi'
import { PhoneNumberUtil } from 'google-libphonenumber'
import validator from 'validator'
import { ALLOWED_EXTENSIONS, ALLOWED_TYPES, MAX_FILE_SIZE } from './constants'

const phoneValidatorInstance = PhoneNumberUtil.getInstance()

const validateFile = (value, helpers, isRequired = false) => {
  if (!value || !value[0]) {
    if (isRequired) return helpers.message('Archivo obligatorio')
    return value
  }

  const file = value[0]

  if (!ALLOWED_EXTENSIONS.test(file.name)) {
    return helpers.message('Tipo de archivo no permitido')
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return helpers.message('Tipo de archivo no permitido')
  }

  if (file.size > MAX_FILE_SIZE) {
    return helpers.message('Archivo demasiado grande (máx 5MB)')
  }

  return value
}

const validators = {
  name: Joi.string().min(2).max(255).messages({
    'string.empty': 'Este campo es obligatorio',
    'string.max': 'Número de carácteres excedido',
    'string.min': 'Número de carácteres insuficiente'
  }),
  surnames: Joi.string().min(2).max(500).messages({
    'string.empty': 'Este campo es obligatorio',
    'string.max': 'Número de carácteres excedido',
    'string.min': 'Número de carácteres insuficiente'
  }),
  email: Joi.string()
    .max(255)
    .custom((mailString, helpers) => {
      if (!validator.isEmail(mailString)) {
        return helpers.error('string.invalid')
      }
      return mailString
    })
    .messages({
      'string.empty': 'Este campo es obligatorio',
      'string.max': 'Se ha excedido el número de carácteres',
      'string.invalid': 'Este email no es válido'
    }),
  phone: Joi.string()
    .max(255)
    .custom((phoneString, helpers) => {
      try {
        const number = phoneValidatorInstance.parse(phoneString, 'es')
        if (!phoneValidatorInstance.isPossibleNumber(number)) {
          return helpers.error('any.invalid')
        }
        return phoneString
      } catch (e) {
        return helpers.error('any.invalid')
      }
    })
    .messages({
      'string.empty': 'Este campo es obligatorio',
      'any.invalid': 'Este número es inválido',
      'string.max': 'Se ha excedido el número de carácteres'
    }),
  message: Joi.string().min(10).max(500).messages({
    'string.empty': 'Este campo es obligatorio',
    'string.min': 'Número de carácteres insuficiente',
    'string.max': 'Número de carácteres excedido'
  }),
  linkedin: Joi.string().optional().allow(''),
  github: Joi.string().optional().allow(''),
  file: Joi.any()
    .required()
    .custom((value, helpers) => validateFile(value, helpers, true)),
  fileOptional: Joi.any()
    .optional()
    .custom((value, helpers) => validateFile(value, helpers, false))
}

export default validators
