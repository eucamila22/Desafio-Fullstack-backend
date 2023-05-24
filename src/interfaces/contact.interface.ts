import { z } from 'zod'
import { DeepPartial, Repository } from 'typeorm'
import { contactSchema, returnContactSchema, returnMultipleContactSchema } from '../schemas/contact.schema'
import { Contact } from '../entities/contact.entity'

type iContact = z.infer<typeof contactSchema>
type iContactReturn = z.infer<typeof returnContactSchema>
type iContactRepo = Repository<Contact>
type iContactsReturn = z.infer<typeof returnMultipleContactSchema>
type iContactUpdate = DeepPartial<iContact>

export { iContact, iContactReturn, iContactRepo, iContactsReturn, iContactUpdate }
