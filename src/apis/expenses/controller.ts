import { Request, Response } from 'express'
import { tokenPayloadService } from '../user/service'
import dayjs from 'dayjs'
import { today } from '../../utils/dateFormat'
import { createExpenseService, deleteExpenseService, findManyExpenseService, updateExpenseService } from './service'
import { expenses } from '@prisma/client'
import env from '../../env'

export const findManyExpenseController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        const companyId = req.body.companyId ? Number(req.body.companyId) : payload.companyId ?? 0
        const projectId = req.body.projectId;
        const page = req.body.page ?? 1;
        const take = req.body.limit ?? env.ROW_PER_PAGE;
        const skip = (page - 1) * take;

        const result = await findManyExpenseService({ companyId, projectId, skip, take })

        res.json({
            status: 'success',
            ...result,
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
}

export const createExpenseController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        const data: Omit<expenses, 'id' | "deletedAt"> = {
            amount: req.body.amount,
            description: req.body.description,
            expenseDate: dayjs(req.body.expenseDate).subtract(7, 'hours').toDate(),
            projectId: req.body.projectId,
            userId: payload.userId,
            companyId: payload.companyId,
            createdAt: today(),
            updatedAt: today(),
        }
        await createExpenseService(data)
        res.json({
            status: 'success',
            message: 'ບັນທຶກຂໍ້ມູນ ສຳເລັດແລ້ວ'
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
}

export const updateExpenseController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        const data: Omit<expenses, "deletedAt"> = {
            amount: req.body.amount,
            description: req.body.description,
            expenseDate: dayjs(req.body.expenseDate).subtract(7, 'hours').toDate(),
            projectId: req.body.projectId,
            companyId: payload.companyId,
            userId: payload.userId,
            createdAt: today(),
            updatedAt: today(),
            id: req.body.id
        }
        await updateExpenseService(data)
        res.json({
            status: 'success',
            message: 'ແກ້ໄຂຂໍ້ມູນ ສຳເລັດແລ້ວ'
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
}

export const deleteExpenseController = async (req: Request, res: Response) => {
    try {
        const payload = tokenPayloadService(req)
        await deleteExpenseService({
            id: Number(req.params.id),
            companyId: payload.companyId
        })
        res.json({
            status: 'success',
            message: 'ລົບຂໍ້ມູນ ສຳເລັດແລ້ວ'
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
}


