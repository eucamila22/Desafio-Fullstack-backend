import { z } from 'zod'
import { clientSchema, returnClientSchema } from '../schemas/client.schema'
import { Client } from '../entities/client.entity'
import { Repository } from 'typeorm'

type iClient = z.infer<typeof clientSchema>
type iClientReturn = z.infer<typeof returnClientSchema>
type iClientRepo = Repository<Client>


export { iClient, iClientReturn, iClientRepo }
