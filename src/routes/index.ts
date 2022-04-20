import { Router } from 'express'
import tokenValidator from '../middlewares/tokenValidator'
import authRoutes from './authRoutes'
import healthRoutes from './healthRoutes'
import petRoutes from './petRoutes'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/auth', authRoutes)
apiRoutes.use('/pets', tokenValidator(), petRoutes)

export default apiRoutes