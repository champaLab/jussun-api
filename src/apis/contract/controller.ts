import { Request, Response } from 'express'

import { tokenPayloadService } from '../user/service'
import { createContractService, contractService, updateContractService, finOneProjectService, updateProjectAreaService } from './service'
import dayjs from 'dayjs'

export const ContractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const projectId = req.body.projectId

    const contracts = await contractService({ projectId })
    return res.json({
        status: 'success',
        contracts
    })
}

export const createContractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const area = Number(req.body.area)
    const companyId = Number(payload.companyId)
    const contractId = req.body.contractId
    const createdBy = payload.userId
    const updatedBy = payload.userId
    const currency = req.body.currency
    const docId = req.body.docId
    const modeOfPayment = req.body.modeOfPayment
    const numberOfInstallment = Number(req.body.numberOfInstallment)
    const payInAdvance = Number(req.body.payInAdvance)
    const paidDate = Number(req.body.paidDate)
    const price = Number(req.body.price)
    const projectId = Number(req.body.projectId)
    const totalPrice = Number(req.body.totalPrice)
    const updatedAt = dayjs().toDate()
    const createdAt = dayjs().toDate()

    const project = await finOneProjectService({ projectId })

    if (!project) {
        return res.json({
            status: 'error',
            message: 'ບໍ່ພົບຂໍ້ມູນ ໂຄງການ'
        })
    }

    if (project.area < area) {
        return res.json({
            status: 'error',
            message: 'ເນື້ອທີ່ໂຄງການ ບໍ່ພຽງພໍ'
        })
    }

    const projectArea = updateProjectAreaService({ area: project.area - area, projectId })
    if (!projectArea) {
        return res.json({
            status: 'error',
            message: 'ແກ້ໄຂເນື້ອທີ່ ໂຄງການ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    const p = await createContractService({
        area,
        companyId,
        createdBy,
        contractId,
        createdAt,
        currency,
        docId,
        modeOfPayment,
        numberOfInstallment,
        payInAdvance,
        paidDate,
        price,
        projectId,
        totalPrice,
        updatedAt,
        updatedBy
    })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ສ້າງໂຄງການ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ສ້າງໂຄງການ ສຳເລັດແລ້ວ'
    })
}

export const updateContractController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const area = Number(req.body.area)
    const companyId = Number(payload.companyId)
    const contractId = req.body.contractId
    const createdBy = payload.userId
    const updatedBy = payload.userId
    const currency = req.body.currency
    const docId = req.body.docId
    const modeOfPayment = req.body.modeOfPayment
    const numberOfInstallment = Number(req.body.numberOfInstallment)
    const payInAdvance = Number(req.body.payInAdvance)
    const paidDate = Number(req.body.paidDate)
    const price = Number(req.body.price)
    const projectId = Number(req.body.projectId)
    const totalPrice = Number(req.body.totalPrice)
    const updatedAt = dayjs().toDate()
    const createdAt = dayjs().toDate()

    const p = await updateContractService({
        area,
        companyId,
        createdBy,
        contractId,
        createdAt,
        currency,
        docId,
        modeOfPayment,
        numberOfInstallment,
        payInAdvance,
        paidDate,
        price,
        projectId,
        totalPrice,
        updatedAt,
        updatedBy
    })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ແກ້ໄຂຂໍ້ມູນສັນຍາ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ແກ້ໄຂຂໍ້ມູນສັນຍາ ສຳເລັດແລ້ວ'
    })
}
