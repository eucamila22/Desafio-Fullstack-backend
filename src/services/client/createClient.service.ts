import { AppDataSource } from '../../data-source'
import { Client } from '../../entities/client.entity'
import { iClient, iClientRepo } from '../../interfaces/client.interface'
import { returnClientSchema } from '../../schemas/client.schema'

const createClientService = async (clientData: iClient) => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)
    const client = clientRepository.create(clientData)
    await clientRepository.save(client)
    const newClient = returnClientSchema.parse(client)
    return newClient
}

export default createClientService
