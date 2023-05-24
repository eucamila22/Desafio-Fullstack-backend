import { Request, Response } from 'express'
import createClientService from '../services/client/createClient.service'
import { iClient, iClientUpdate } from '../interfaces/client.interface'
import listAllClientService from '../services/client/listAllClient.service'
import updateClientService from '../services/client/updateClient.service'
import deleteClientService from '../services/client/deleteClient.service'
import listClientByIdService from '../services/client/listClientById.service'

const createClientController = async (req: Request, res: Response) => {
    const clientData: iClient = req.body
    const newClient = await createClientService(clientData)

    return res.status(201).json(newClient)
}

const listAllClientController = async (req: Request, res: Response) => {
    const clients = await listAllClientService()

    return res.json(clients)
}

const listClientByIdController = async (req: Request, res: Response) => {
    const idClient = parseInt(req.params.id)
    const idToken = parseInt(req.client.id)
    const client = await listClientByIdService(idClient, idToken)

    return res.json(client)
}

const updateClientController = async (req: Request, res: Response) => {
    const clientData: iClientUpdate = req.body
    const idClient = parseInt(req.params.id)
    const updatedClient = await updateClientService(clientData, idClient)

    return res.json(updatedClient)
}

const deleteClientController = async (req: Request, res: Response) => {
    const idClient = parseInt(req.params.id)
    await deleteClientService(idClient)

    return res.status(204).send()
}

export {
    createClientController,
    listAllClientController,
    listClientByIdController,
    updateClientController,
    deleteClientController,
}
