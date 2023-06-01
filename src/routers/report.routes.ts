import { Router, Request, Response } from 'express'
import PDFDocument from 'pdfkit'
import { AppDataSource } from '../data-source'
import ensureTokenIsValid from '../middlewares/ensureTokenIsValid.middleware'
import { Client } from '../entities/client.entity'
import { returnClientSchema } from '../schemas/client.schema'

export const reportRoutes: Router = Router()

reportRoutes.get('', ensureTokenIsValid, async (req: Request, res: Response) => {
    try {
        if (!req.client) {
            return res.status(401).json({ message: 'Usuário não autenticado.' })
        }
        const clientId = req.client.id
        const clientRepository = AppDataSource.getRepository(Client)
        const queryBuilder = clientRepository
            .createQueryBuilder('client')
            .leftJoinAndSelect('client.contact', 'contact')
            .where('client.id = :clientId', { clientId })
        const client = await queryBuilder.getOne()
        if (!client) {
            return res.status(404).json({ message: 'Usuário não encontrado.' })
        }
        const doc = new PDFDocument()
        doc.fontSize(18).text('Lista de Contatos', { align: 'center' }).moveDown()
        const validatedclient = returnClientSchema.parse(client)
        doc.fontSize(12)
            .text(
                ` Usuario: ${validatedclient.name}, E-mail:${validatedclient.email}, Telefone: ${validatedclient.phone}, Data: ${validatedclient.createdAt}`
            )
            .moveDown()
        doc.fontSize(14).text('Contatos:', { align: 'left' }).moveDown()
        client.contact.forEach((contact) => {
            doc.fontSize(10).text(
                ` Nome: ${contact.full_name}, E-mail: ${contact.email}, Telefone: ${contact.phone}`
            )
        })
        doc.end()
        res.setHeader('Content-Type', 'application/pdf')
        doc.pipe(res)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Erro ao gerar o relatório.' })
    }
})
