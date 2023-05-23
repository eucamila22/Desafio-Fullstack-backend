import { z } from 'zod'
import { createLoginSchema } from '../schemas/login.schema'

type iLogin = z.infer<typeof createLoginSchema>

export { iLogin }
