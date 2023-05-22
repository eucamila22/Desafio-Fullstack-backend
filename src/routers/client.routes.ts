import { Router } from 'express'
import { createClientController } from '../controllers/client.controllers'

const ClientRoutes: Router = Router()

ClientRoutes.post('', createClientController)

export default ClientRoutes
