import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contact.entity'
import { iContactRepo } from '../../interfaces/contact.interface'

const deleteContactService = async (idContact: number): Promise<void> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)
    const contact = await contactRepository.findOne({
        where: {
            id: idContact,
        },
    })

    await contactRepository.remove(contact!)
}

export default deleteContactService
