import { report } from 'process'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'

export const readReportService = async (data: { userId: number; dateStart: string; dateEnd: string }) => {
    const { userId, dateStart, dateEnd } = data
    try {
        const report: any[] = await prismaClient.$queryRaw` SELECT paymentMethod, SUM(amount) as totalAmount, currency
        FROM invoice
        WHERE createdBy = ${userId} AND DATE(paidDate) BETWEEN ${dateStart} AND ${dateEnd}
        GROUP BY paymentMethod, currency;`
        return report
    } catch (err) {
        logger.error(err)
        console.log(err)
        return []
    } finally {
        await prismaClient.$disconnect()
    }
}

export const summaryContractPaydayService = async (data: { userId: number; dateStart: string; dateEnd: string; payDay: number }) => {
    const { userId, dateStart, dateEnd, payDay } = data
    try {
        const contract = await prismaClient.contracts.count()
        const projects = await prismaClient.projects.count()
        const contractPayday = await prismaClient.contracts.count({ where: { payDay } })
        return { contractPayday, contract, projects }
    } catch (err) {
        logger.error(err)
        console.log(err)
        return { contractPayday: 0, contract: 0, projects: 0 }
    } finally {
        await prismaClient.$disconnect()
    }
}
