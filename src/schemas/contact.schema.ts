import { z } from 'zod'

const contactSchema = z.object({
    full_name: z.string().min(3).max(45),
    email: z.string().email().min(3).max(45),
    phone: z.string().min(8),
})

const returnContactSchema = contactSchema.extend({
    id: z.number(),
    createdAt: z.string(),
})

const contactUpdateSchema = contactSchema.partial()
const returnMultipleContactSchema = returnContactSchema.array()

export { contactSchema, returnContactSchema, contactUpdateSchema, returnMultipleContactSchema }