import { Router } from 'express'
import { createClientController, listAllClientController, updateClientController } from '../controllers/client.controllers'

const clientRoutes: Router = Router()

clientRoutes.post('', createClientController)
clientRoutes.get('', listAllClientController)
clientRoutes.patch('/:id', updateClientController)
// clientRoutes.delete('/:id', deleteClientController)

export default clientRoutes
