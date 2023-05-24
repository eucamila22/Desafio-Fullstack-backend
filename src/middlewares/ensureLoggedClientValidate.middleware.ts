import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors'

const ensureLoggedClientValidateMiddleware = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<Response | void> => {
    const authenticatedClientId: string = req.client.id
    const idClient: number = parseInt(req.params.id)

    if (parseInt(authenticatedClientId) !== idClient) {
        throw new AppError('Insufficient permission', 403)
    }

    return next()
}

export default ensureLoggedClientValidateMiddleware
