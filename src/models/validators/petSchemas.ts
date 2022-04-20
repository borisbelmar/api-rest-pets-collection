import Joi from 'joi'
import { CreatePetDTO, UpdatePetDTO } from '../dto/PetDTO'

export const createPetSchema: Joi.ObjectSchema<CreatePetDTO> = Joi.object().keys({
  name: Joi.string().required(),
  type: Joi.string().required(),
  birth: Joi.date().required(),
  photo: Joi.string().uri()
})

export const updatePetSchema: Joi.ObjectSchema<UpdatePetDTO> = Joi.object().keys({
  name: Joi.string(),
  type: Joi.string(),
  birth: Joi.date(),
  photo: Joi.string().uri()
})
