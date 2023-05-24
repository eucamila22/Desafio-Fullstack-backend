import { z } from 'zod'

const clientSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().min(3).max(45),
    phone: z.string().min(8),
    password: z.string().min(4).max(20)
})

const returnClientSchema = clientSchema
    .extend({
        id: z.number(),
        createdAt: z.string(),
    })
    .omit({ password: true })

const clientUpdateSchema = clientSchema.partial()
const returnMultipleClientSchema = returnClientSchema.array()

export { clientSchema, returnClientSchema, returnMultipleClientSchema, clientUpdateSchema }
