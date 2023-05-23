import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { iLogin } from '../interfaces/login.interface'
import { iClientRepo } from '../interfaces/client.interface'
import { AppDataSource } from '../data-source'
import { Client } from '../entities/client.entity'
import { AppError } from '../errors'


const createLoginService = async (loginData: iLogin): Promise<string> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)
    const client: Client | null = await clientRepository.findOneBy({
        email: loginData.email,
    })

    if (!client) {
        throw new AppError('Invalid credentials', 401)
    }

    const passwordMatch = await compare(loginData.password, client.password)

    if (!passwordMatch) {
        throw new AppError('Invalid credentials', 401)
    }

    const token: string = jwt.sign(
        {
            // id: client.id,
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: String(client.id),
        }
    )

    return token
}

export default createLoginService
