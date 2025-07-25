import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import prom from 'prom-client'
import { logRequestResponse } from './middlewares/logger-middleware'
import router from './router'
import env from './env'
import { join } from 'path'
import { limiter } from './utils/limiter'
import requestIp from 'request-ip'
import { helpCheck } from './utils/helpCheck'

const app = express()
const register = new prom.Registry()
register.setDefaultLabels({
    worker: env.SERVICE_NAME
})
const collectDefaultMetrics = prom.collectDefaultMetrics
collectDefaultMetrics({
    labels: { NODE_APP_INSTANCE: process.env.NODE_APP_INSTANCE },
    register
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('trust proxy', true)
app.set('trust proxy', 'loopback')
app.use(limiter)
app.use(requestIp.mw())

app.use((req: Request, res: Response, next: NextFunction) => logRequestResponse(req, res, next, ['excel', 'users', 'metrics']))

app.use(`${env.BASE_PATH}/v1`, router)
app.use(`${env.BASE_PATH}`, express.static(join(env.PWD, 'uploads')))

app.get('/metrics', async (req: Request, res: Response) => {
    res.set('Content-Type', register.contentType)
    res.send(await register.metrics())
})

app.get('/', helpCheck)
app.get('/test', helpCheck)
app.get(env.BASE_PATH, helpCheck)

export default app
