import cors from 'cors'
import express from 'express'
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

const corsOptions = {}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('trust proxy', true)
app.set('trust proxy', 'loopback')
app.use(limiter)
app.use(requestIp.mw())

app.use((req, res, next) => logRequestResponse(req, res, next, ['excel', 'users', 'metrics']))
// app.use(express.static(path.join(__dirname, './uploads')))

app.use(`${env.BASE_PATH}/v1`, router)
app.use(`${env.BASE_PATH}`, express.static(join(env.PWD, 'uploads')))
app.use(`${env.BASE_PATH}`, express.static(join(env.PWD, 'images')))
app.use(`${env.BASE_PATH}`, express.static(join(env.PWD, 'images')))

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType)
    return res.send(await register.metrics())
})

app.get('/', helpCheck)
app.get(env.BASE_PATH, helpCheck)

export default app
