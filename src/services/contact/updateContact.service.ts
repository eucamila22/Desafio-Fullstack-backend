import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contact.entity'
import { iContactUpdate, iContactReturn, iContactRepo } from '../../interfaces/contact.interface'
import { returnContactSchema } from '../../schemas/contact.schema'

const updateContactService = async (
    newContactData: iContactUpdate,
    idContact: number
): Promise<iContactReturn> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)
    const oldContact = await contactRepository.findOneBy({
        id: idContact,
    })

    const contact = contactRepository.create({
        ...oldContact,
        ...newContactData,
    })

    await contactRepository.save(contact)
    const updateContact = returnContactSchema.parse(contact)

    return updateContact
}

export default updateContactService
