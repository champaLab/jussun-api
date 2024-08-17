import app from './app'
import logger from './configs/winston'
import env from './env'
import { logNamespace } from './log'
import './crontab'

logNamespace.run(() => {})

const server = app.listen(env.NODE_PORT, env.NODE_HOST, async () => {
    console.log(`Listening on ${env.NODE_HOST}:${env.NODE_PORT} ${env.BASE_PATH}`)
    logger.info('Started', `Listening on ${env.NODE_HOST}:${env.NODE_PORT} ${env.BASE_PATH}`)
})
for (const signal of ['SIGINT', 'SIGBREAK', 'SIGTERM']) {
    process.on(signal, () => {
        logger.info(`${signal} signal received.`)
        logger.info('Closing http server.')
        server.close(() => {
            logger.info('Http server closed.')
            process.exit(0)
        })
    })
}