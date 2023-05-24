import { AppDataSource } from '../../data-source'
import { Client } from '../../entities/client.entity'
import { iClientRepo, iClientsReturn } from '../../interfaces/client.interface'
import { returnMultipleClientSchema } from '../../schemas/client.schema'

const listAllClientService = async (): Promise<iClientsReturn> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)
    const findClients: Array<Client> = await clientRepository.find()
    const clients = returnMultipleClientSchema.parse(findClients)

    return clients
}

export default listAllClientService
