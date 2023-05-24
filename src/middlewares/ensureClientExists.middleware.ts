import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { AppError } from '../errors'
import { iClientRepo } from '../interfaces/client.interface'
import { Client } from '../entities/client.entity'

const ensureClientExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)
    const findClient = await clientRepository.findOne({
        where: {
            id: parseInt(req.params.id) || parseInt(req.client.id),
        },
    })

    if (!findClient) {
        throw new AppError('Client not found', 404)
    }

    return next()
}

export default ensureClientExistsMiddleware
