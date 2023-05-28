// import { AppDataSource } from '../../data-source'
// import { Contact } from '../../entities/contact.entity'
// import { iContactRepo, iContactsReturn } from '../../interfaces/contact.interface'
// import { returnMultipleContactSchema } from '../../schemas/contact.schema'

// const listAllContactService = async (): Promise<iContactsReturn> => {
//     const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)
//     const findContacts: Array<Contact> = await contactRepository.find()
//     const contacts = returnMultipleContactSchema.parse(findContacts)

//     return contacts
// }

// export default listAllContactService

import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { iContact, iContactRepo } from '../../interfaces/contact.interface';

const listAllContactService = async (): Promise<iContact[]> => {
  const contactRepository: iContactRepo = AppDataSource.getRepository(Contact);
  const contacts: iContact[] = await contactRepository.find({
    relations: {
      client: true,
    },
  });

  return contacts;
};

export default listAllContactService;
