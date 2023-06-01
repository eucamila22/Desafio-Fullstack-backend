import 'express-async-errors'
import express, { Application } from 'express'
import { handleErrors } from './errors'
import clientRoutes from './routers/client.routes'
import cors from 'cors'
import loginRoutes from './routers/login.routes'
import contactRoutes from './routers/contact.routes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
import { reportRoutes } from './routers/report.routes'

const app: Application = express()
app.use(cors())
app.use(express.json())

app.use('/clients', clientRoutes)
app.use('/login', loginRoutes)
app.use('/contacts', contactRoutes)
app.use('/report', reportRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(handleErrors)
export default app
