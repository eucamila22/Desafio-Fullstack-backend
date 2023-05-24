import { AppDataSource } from '../../data-source'
import { Client } from '../../entities/client.entity'
import { AppError } from '../../errors'
import { iClient, iClientRepo } from '../../interfaces/client.interface'

const listClientByIdService = async (idClient: number, idToken: number): Promise<iClient> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)
    const client = await clientRepository.findOne({
        where: {
            id: idClient,
        },
        relations: {
            contact: true,
        },
        select: ['id', 'name', 'email', 'phone', 'createdAt', 'contact'],
    })

    if (!client) {
        throw new AppError('Client not found!')
    }

    if (client.id !== idToken) {
        throw new AppError('Unauthorized!', 401)
    }

    return client
}

export default listClientByIdService
