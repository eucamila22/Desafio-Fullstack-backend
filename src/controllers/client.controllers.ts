import { Request, Response } from 'express'
import createClientService from '../services/client/createClient.service'
import { iClient } from '../interfaces/client.interface'

const createClientController = async (req: Request, res: Response) => {
    const userData: iClient = req.body
    const newClient = await createClientService(userData)

    return res.status(201).json(newClient)
}

export { createClientController }
