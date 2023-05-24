import { Router } from 'express'
import {
    createClientController,
    deleteClientController,
    listAllClientController,
    listClientByIdController,
    updateClientController,
} from '../controllers/client.controllers'
import ensureEmailExistsMiddleware from '../middlewares/ensureEmailExists.middleware'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { clientSchema, clientUpdateSchema } from '../schemas/client.schema'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import ensureClientExistsMiddleware from '../middlewares/ensureClientExists.middleware'
import ensureLoggedClientValidateMiddleware from '../middlewares/ensureLoggedClientValidate.middleware'
import ensureClientIsContactFreeMiddleware from '../middlewares/ensureClientIsContactFree.middleware'

const clientRoutes: Router = Router()

clientRoutes.post(
    '',
    ensureEmailExistsMiddleware,
    ensureDataIsValidMiddleware(clientSchema),
    createClientController
)
clientRoutes.get('', listAllClientController)
clientRoutes.get('/:id', ensureClientExistsMiddleware, ensureTokenIsValidMiddleware, listClientByIdController)
clientRoutes.patch(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureClientExistsMiddleware,
    ensureDataIsValidMiddleware(clientUpdateSchema),
    updateClientController
)
clientRoutes.delete(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureClientExistsMiddleware,
    ensureLoggedClientValidateMiddleware,
    ensureClientIsContactFreeMiddleware,
    deleteClientController
)

export default clientRoutes
