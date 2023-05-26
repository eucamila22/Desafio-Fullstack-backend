import { Router } from 'express'
import {
    createContactController,
    deleteContactController,
    listAllContactController,
    listContactByIdController,
    updateContactController,
} from '../controllers/contact.controller'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import ensureLoggedClientValidateMiddleware from '../middlewares/ensureLoggedClientValidate.middleware'
import ensureLoggedContactValidateMiddleware from '../middlewares/ensureLoggedContactValidated.middleware'

const contactRoutes: Router = Router()

contactRoutes.post('', ensureTokenIsValidMiddleware, createContactController)
contactRoutes.get('', listAllContactController)
contactRoutes.get(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureLoggedContactValidateMiddleware,
    listContactByIdController
)
contactRoutes.patch(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureLoggedContactValidateMiddleware,
    updateContactController
)
contactRoutes.delete(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureLoggedContactValidateMiddleware,
    deleteContactController
)

export default contactRoutes
