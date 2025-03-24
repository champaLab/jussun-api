import { report } from 'process'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'

export const readReportService = async (data: { userId: number; dateStart: string; dateEnd: string }) => {
    const { userId, dateStart, dateEnd } = data
    try {
        const report: any[] = await prismaClient.$queryRaw`
        SELECT paymentMethod, SUM(amount) as totalAmount, currency
        FROM invoice
        WHERE createdBy = ${userId} AND DATE(paidDate) BETWEEN ${dateStart} AND ${dateEnd}
        GROUP BY paymentMethod, currency
        `
        return report
    } catch (err) {
        logger.error(err)
        console.log(err)
        return []
    } finally {
        await prismaClient.$disconnect()
    }
}

export const summaryContractPaydayService = async (data: {
    payDay: number
    monthly: string
    contractStatus: string
    invoiceStatus: string
    companyId: number
}) => {
    const { payDay, monthly, contractStatus, invoiceStatus, companyId } = data
    console.log(data)

    try {
        const contracts = await prismaClient.$queryRaw`
            SELECT contractStatus, COUNT(*) total FROM contracts WHERE companyId = ${companyId} GROUP BY contractStatus
        `
        const projects = await prismaClient.projects.count({ where: { companyId } })

        const [{ contractPayday }]: any[] = await prismaClient.$queryRaw`
            SELECT COUNT(*) as contractPayday FROM contracts c
            LEFT JOIN invoice inv ON inv.contractId = c.contractId
            WHERE c.payDay = DATE(CURDATE()) AND
            inv.monthly = ${monthly} AND
            inv.companyId = ${companyId} AND
            c.contractStatus = 'ACTIVE' AND
            inv.invoiceStatus = 'PENDING'
        `

        return { contractPayday, contracts, projects }
    } catch (err) {
        logger.error(err)
        console.log(err)
        return { contractPayday: 0, contract: [], projects: 0 }
    } finally {
        await prismaClient.$disconnect()
    }
}
