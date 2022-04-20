import Joi from 'joi'

export const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

export const registerSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})
