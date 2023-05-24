import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contact.entity'
import { AppError } from '../../errors'
import { iContact, iContactRepo } from '../../interfaces/contact.interface'

const listContactByIdService = async (idContact: number, idToken: number): Promise<iContact> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)
    const contact = await contactRepository.findOne({
        where: {
            id: idContact,
        },
        relations: {
            client: true,
        },
    })

    if (!contact) {
        throw new AppError('Contact not found!')
    }

    if (contact.client.id !== idToken) {
        throw new AppError('Unauthorized!', 401)
    }

    return contact
}

export default listContactByIdService
