import { AppDataSource } from '../../data-source'
import { Client } from '../../entities/client.entity'
import { iClientRepo } from '../../interfaces/client.interface'

const deleteClientService = async (idClient: number): Promise<void> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOne({
        where: {
            id: idClient
        }
    })

    await clientRepository.remove(client!)
}

export default deleteClientService