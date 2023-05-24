import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { Contact } from '../entities/contact.entity'
import { iContactRepo } from '../interfaces/contact.interface'
import { AppError } from '../errors'

const ensureClientIsContactFreeMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)
    const idClient = parseInt(req.params.id)
    const contacts = await contactRepository.find({
        where: {
            client: {
                id: idClient,
            },
        },
    })

    if (contacts.length > 0) {
        throw new AppError('Cannot perform the operation. Client has contacts.', 400)
    }

    return next()
}

export default ensureClientIsContactFreeMiddleware
