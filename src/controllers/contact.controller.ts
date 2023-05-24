import { Request, Response } from 'express'
import { iContact, iContactUpdate } from '../interfaces/contact.interface'
import createContactService from '../services/contact/createContact.service'
import deleteContactService from '../services/contact/deleteContact.service'
import listAllContactService from '../services/contact/listAllContacts.service'
import listContactByIdService from '../services/contact/listContactById.service'
import updateContactService from '../services/contact/updateContact.service'

const createContactController = async (req: Request, res: Response) => {
    try {
        const contactData: iContact = req.body
        const newContact = await createContactService(contactData, req)

        return res.status(201).json(newContact)
    } catch (error) {
        console.log(error)
    }
}

const listAllContactController = async (req: Request, res: Response) => {
    const contacts = await listAllContactService()

    return res.json(contacts)
}

const listContactByIdController = async (req: Request, res: Response) => {
    const idContact = parseInt(req.params.id)
    const idToken = parseInt(req.client.id)
    const contact = await listContactByIdService(idContact, idToken)

    return res.json(contact)
}

const updateContactController = async (req: Request, res: Response) => {
    const contactData: iContactUpdate = req.body
    const idContact = parseInt(req.params.id)
    const updatedContact = await updateContactService(contactData, idContact)

    return res.json(updatedContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    const idContact = parseInt(req.params.id)
    await deleteContactService(idContact)

    return res.status(204).send()
}

export {
    createContactController,
    listAllContactController,
    listContactByIdController,
    updateContactController,
    deleteContactController,
}
