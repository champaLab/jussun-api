import logger from "../../configs/winston"
import prismaClient from "../../prisma"

export const readReceiveService = async (data: { companyId: number, dateStart: string, dateEnd: string }) => {
    console.log("", data)
    const { companyId, dateStart, dateEnd } = data
    try {
        const receive: any[] = await prismaClient.$queryRaw` SELECT inv.paymentMethod, SUM(inv.amount) as totalAmount, inv.currency, CONCAT(u.fullName, ' ', u.lastName) createdBy
FROM invoice inv
LEFT JOIN contracts ct on inv.contractId = ct.contractId
LEFT JOIN company cp on cp.companyId = ct.companyId
LEFT JOIN users u on u.userId = inv.createdBy
WHERE cp.companyId = ${companyId}
AND DATE(paidDate) BETWEEN ${dateStart} AND ${dateEnd}
GROUP BY paymentMethod, currency, createdBy
ORDER BY createdBy`
        return receive

    } catch (err) {
        logger.error(err)
        console.log(err)
        return []
    } finally {
        await prismaClient.$disconnect()
    }
}
