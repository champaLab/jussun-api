import fs from 'fs-extra'
import { join } from 'path'
import winston from 'winston'
import env from '../env'
import { logNamespace } from '../middlewares/logger-middleware'

const logDirectory = join(process.cwd(), 'logs')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const rotatingFileStream = () => {
    const { createStream } = require('rotating-file-stream')
    const r = createStream(`${env.SERVICE_NAME}.log`, {
        interval: '1d',
        path: logDirectory,
        maxSize: '50M' // 50MB max file size
    })

    return r
}

const customFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
        return JSON.stringify(
            {
                timestamp,
                level: `${level}`.toUpperCase(),
                message,
                requestId: logNamespace?.get('requestId'),
                tracingData: logNamespace?.get('tracingData'),
                username: logNamespace?.get('username'),
                user_id: logNamespace?.get('user_id'),
                user_type: logNamespace?.get('user_type'),
                user_type_name: logNamespace?.get('user_type_name'),
                ...meta
            },
            null,
            env.NODE_ENV == 'production' ? 0 : 4
        )
    })
)

const logger = winston.createLogger({
    level: 'verbose',
    format: customFormat,
    transports: [
        new winston.transports.Console({
            format: winston.format.colorize({ all: env.NODE_ENV == 'development' })
        }),
        new winston.transports.Stream({
            stream: rotatingFileStream()
        })
    ],
    defaultMeta: {
        node_port: env.NODE_PORT,
        service: env.SERVICE_NAME,
        base_path: env.BASE_PATH,
        environment: env.NODE_ENV
    }
})

export default logger
