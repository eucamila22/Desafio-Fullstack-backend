import { z } from 'zod'
import { clientSchema, returnClientSchema, returnMultipleClientSchema } from '../schemas/client.schema'
import { Client } from '../entities/client.entity'
import { DeepPartial, Repository } from 'typeorm'

type iClient = z.infer<typeof clientSchema>
type iClientReturn = z.infer<typeof returnClientSchema>
type iClientRepo = Repository<Client>
type iClientsReturn = z.infer<typeof returnMultipleClientSchema>
type iClientUpdate = DeepPartial<iClient>

export { iClient, iClientReturn, iClientRepo, iClientsReturn, iClientUpdate }
