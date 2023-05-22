import 'express-async-errors'
import express, { Application } from 'express'
import { handleErrors } from './errors'
import clientRoutes from './routers/client.routes'
import cors from 'cors'

const app: Application = express()
app.use(cors());
app.use(express.json())

app.use('/clients', clientRoutes)

app.use(handleErrors)
export default app

