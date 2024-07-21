import { report } from 'process'
import logger from '../../configs/winston'
import prismaClient from '../../prisma'



export const readReportService = async (data: { userId: number }) => {
    console.log("", data)
    const { userId } = data
    try {
        const report: any[] = await prismaClient.$queryRaw` SELECT paymentMethod, SUM(amount) as totalAmount, currency
        FROM invoice
        WHERE createdBy = ${userId}
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

// export const createReportService = async (data: exchange) => {
//     const { exchangeId, updatedBy, updatedAt, ...newData } = data
//     console.log(newData)
//     try {
//         const p = await prismaClient.exchange.create({
//             data: newData
//         })
//         return p
//     } catch (err) {
//         logger.error(err)
//         console.log(err)
//         return null
//     } finally {
//         await prismaClient.$disconnect()
//     }
// }



