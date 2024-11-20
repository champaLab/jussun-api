import { Prisma } from '../../prisma-client'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'
import env from '../../env'
import { TReport } from './type'

export const findManyHistoryService = async (data: TReport) => {
    const skip = data.key ? 0 : (data.page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE
    let conditions: Prisma.Sql[] = []
    const { companyName, userId, dateEnd, dateStart } = data
    const key = data.key ? `%${data.key}%` : null
    if (userId) {
        conditions.push(Prisma.sql`lg.userId = ${userId}`)
    }
    console.log({ userId })
    if (companyName) {
        conditions.push(Prisma.sql`lg.companyName = ${companyName}`)
    }
    if (key) {
        conditions.push(Prisma.sql`(lg.userId = ${data.key} OR lg.companyName LIKE ${key})`)
    }
    if (!key) {
        conditions.push(Prisma.sql` DATE(lg.createdAt) BETWEEN ${dateStart} AND ${dateEnd} `)
    }
    let whereClause = Prisma.sql``
    if (conditions.length > 0) {
        whereClause = Prisma.sql`WHERE ${Prisma.join(conditions, ` AND `)}`
    }
    try {
        const totalCountResult: any[] = await prismaClient.$queryRaw`
            SELECT COUNT(*) AS totalCount
            FROM logs lg
            LEFT JOIN users u ON lg.userId = u.userId
            LEFT JOIN company com ON lg.companyId = com.companyId
            ${whereClause}
        `
        const totalCount = Number(totalCountResult[0]?.totalCount ?? 0)
        const count = Math.ceil(totalCount / take)

        const history: any[] = await prismaClient.$queryRaw`
            SELECT lg.body,lg.path,com.companyName,lg.description,lg.createdAt,CONCAT(u.fullName, ' ', u.lastName) fullName , lg.ip
             FROM logs lg
         LEFT JOIN users u ON lg.userId = u.userId
         LEFT JOIN company com ON lg.companyId = com.companyId 
            ${whereClause} ORDER BY lg.createdAt DESC
            LIMIT ${take}
            OFFSET ${skip}
        `
        console.log({ history })
        return { history, count }
    } catch (err) {
        logger.error(err)
        console.log(err)
        return { history: [], count: 0 }
    } finally {
        await prismaClient.$disconnect()
    }
}
