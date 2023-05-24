import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { AppError } from '../errors'
import { iClientRepo } from '../interfaces/client.interface'
import { Client } from '../entities/client.entity'

const ensureEmailExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)
    const clientEmail = req.body.email
    const findClientEmail = await clientRepository.findOne({
        where: {
            email: clientEmail,
        },
    })

    if (!Object.keys(req.body).includes('email')) {
        return next()
    }

    if (findClientEmail) {
        throw new AppError('Email already exists', 409)
    }

    return next()
}

export default ensureEmailExistsMiddleware
