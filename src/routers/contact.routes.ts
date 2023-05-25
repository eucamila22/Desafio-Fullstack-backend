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

const contactRoutes: Router = Router()

contactRoutes.post('', ensureTokenIsValidMiddleware, createContactController)
contactRoutes.get('', listAllContactController)
contactRoutes.get(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureLoggedClientValidateMiddleware,
    listContactByIdController
)
contactRoutes.patch(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureLoggedClientValidateMiddleware,
    updateContactController
)
contactRoutes.delete(
    '/:id',
    ensureTokenIsValidMiddleware,
    ensureLoggedClientValidateMiddleware,
    deleteContactController
)

export default contactRoutes
