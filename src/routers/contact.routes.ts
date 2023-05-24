import { Router } from 'express'
import {
    createContactController,
    deleteContactController,
    listAllContactController,
    listContactByIdController,
    updateContactController,
} from '../controllers/contact.controller'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'

const contactRoutes: Router = Router()

contactRoutes.post('', ensureTokenIsValidMiddleware, createContactController)
contactRoutes.get('', listAllContactController)
contactRoutes.get('/:id', listContactByIdController)
contactRoutes.patch('/:id', updateContactController)
contactRoutes.delete('/:id',ensureTokenIsValidMiddleware, deleteContactController)

export default contactRoutes
