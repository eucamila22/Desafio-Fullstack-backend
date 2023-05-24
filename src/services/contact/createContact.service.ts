import { Request } from 'express'
import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contact.entity'
import { iContact, iContactRepo, iContactReturn } from '../../interfaces/contact.interface'
import { returnContactSchema } from '../../schemas/contact.schema'
import { iClientRepo } from '../../interfaces/client.interface'
import { Client } from '../../entities/client.entity'
import { AppError } from '../../errors'

const createContactService = async (
    contactData: iContact,
    req: Request
): Promise<iContactReturn> => {
    const idClient = parseInt(req.client.id)
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOne({
        where: {
            id: idClient,
        },
    })

    if(!client) {
        throw new AppError('Erro')
    }

    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)
    const contact = contactRepository.create({ ...contactData, client })
    await contactRepository.save(contact)
    const newContact = returnContactSchema.parse(contact)

    return newContact
}

export default createContactService
