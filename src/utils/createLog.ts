import { tokenPayloadService } from './../apis/user/service'
import logger from '../configs/winston'
import prismaClient from '../prisma'
import { Request } from 'express'

export const historyService = async (data: { req: Request; description: string }) => {
    try {
        const payload = tokenPayloadService(data.req)
        const ip = `${data.req.headers['x-real-ip']}` || `${data.req.socket.remoteAddress}`

        const history = await prismaClient.logs.create({
            data: {
                description: data.description,
                path: data.req.url,
                ip: ip,
                companyId: payload.companyId,
                userId: payload.userId
            }
        })
    } catch (error) {
        logger.error(error)
        console.error(error)
        return error
    } finally {
        prismaClient.$disconnect()
    }
}
