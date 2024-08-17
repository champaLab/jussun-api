import axios from 'axios'
import env from '../../env'
import { Request, Response } from 'express'

const axiosInstance = axios.create({
    baseURL: env.API_BOT_URL,
    headers: { 'Content-Type': 'application/json' }
})

export const sentRemindToPayController = async (req: Request, res: Response) => {
    const invoiceId = req.body.invoiceId
    try {
        await axiosInstance.post('/remind-to-pay', { invoiceId })
        res.json({ status: 'success', message: 'ການແຈ້ງໜີ້ ສຳເລັດແລ້ວ' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', message: 'ບໍ່ສາມາດແຈ້ງໜີ້ໄດ້' })
    }
}
