import { Router } from 'express'
import PetController from '../controllers/PetController'

const petRoutes = Router()
const controller = new PetController()

petRoutes.get('/', controller.getAll)
petRoutes.get('/:id', controller.getById)
petRoutes.post('/', controller.create)
petRoutes.put('/:id', controller.update)
petRoutes.delete('/:id', controller.delete)

export default petRoutes