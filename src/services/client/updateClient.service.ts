import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { iClientRepo, iClientReturn, iClientUpdate } from '../../interfaces/client.interface';
import { returnClientSchema } from '../../schemas/client.schema';

const updateClientService = async (newClientData: iClientUpdate, idClient: number): Promise<iClientReturn> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)
    const oldClient = await clientRepository.findOneBy({
        id: idClient
    })

    const client = clientRepository.create({
        ...oldClient,
        ...newClientData,
    })

    await clientRepository.save(client)
    const updateClient = returnClientSchema.parse(client)

    return updateClient
}

export default updateClientService