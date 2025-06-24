// import * as dotenv from 'dotenv'

// dotenv.config()

export default {
    SERVICE_NAME: process.env.SERVICE_NAME,
    NODE_ENV: process.env.NODE_ENV,
    NODE_HOST: process.env.NODE_HOST || '0.0.0.0',
    NODE_PORT: parseInt(`${process.env.NODE_PORT}`) || 1188,
    TZ: process.env.TZ || 'Aisa/Bangkok',
    PWD: process.env.PWD || process.cwd(),
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    JWT_PRIVATE_KEY: `${process.env.JWT_PRIVATE_KEY}`,
    JWT_PUBLIC_KEY: `${process.env.JWT_PUBLIC_KEY}`,
    PRISMA_DB_CONN: process.env.PRISMA_DB_CONN,
    BASE_PATH: `${process.env.BASE_PATH}`,
    HOST_IMAGE: `${process.env.HOST_IMAGE}`,
    DISCORD_WEBHOOK_IMAGE: `${process.env.DISCORD_WEBHOOK_IMAGE}`,
    DISCORD_MONITORING_CHANNEL_HOOK: `${process.env.DISCORD_MONITORING_CHANNEL_HOOK}`,
    DISCORD_WEBHOOK_TEXT: `${process.env.DISCORD_WEBHOOK_TEXT}`,
    PUPPETEER_EXECUTABLE_PATH: `${process.env.PUPPETEER_EXECUTABLE_PATH}`,
    CRONTAB_SEND_REPORT_BY_SHOP: `${process.env.CRONTAB_SEND_REPORT_BY_SHOP}` == 'true',
    CRONTAB_SEND_REPORT_BY_SHOP_TIME: process.env.CRONTAB_SEND_REPORT_BY_SHOP_TIME || '0 1 * * *',
    API_BOT_URL: `${process.env.API_BOT_URL}`,
    QR_ENCRYPTION_KEY: `${process.env.QR_ENCRYPTION_KEY}`,
    CONTACT_NUMBER: `${process.env.CONTACT_NUMBER}`,
    ROW_PER_PAGE: Number(`${process.env.ROW_PER_PAGE ?? 0}`),
    FIREBASE_DATABASE_URL: `${process.env.FIREBASE_DATABASE_URL}`,
    FOLDER_UPLOADS: `${process.env.FOLDER_UPLOADS}`
}
