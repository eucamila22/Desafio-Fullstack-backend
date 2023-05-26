import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors'
import { Contact } from '../entities/contact.entity'
import { AppDataSource } from '../data-source'
import { iContactRepo } from '../interfaces/contact.interface'

const ensureLoggedContactValidateMiddleware = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<Response | void> => {
    const authenticatedClientId: string = req.client.id
    const idContact: number = parseInt(req.params.id)

    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)

    const contato = await contactRepository.findOne({
        where: {
            id: idContact,
            client: {
                id: parseInt(authenticatedClientId),
            },
        },
    })

    if (!contato) {
        throw new AppError('Contato não encontrado', 404)
    }

    return next()
}

export default ensureLoggedContactValidateMiddleware
