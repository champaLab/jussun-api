import { Request, Response } from 'express'
import { createPaymentMethodService, deletePaymentMethodService, findPaymentMethodService, updatePaymentMethodService } from './service'
import { tokenPayloadService } from '../user/service'
import { getPhotoPath } from '../../utils/fileUrl'
import fs from 'fs-extra'
import env from '../../env'
import logger from '../../configs/winston'

export const paymentMethodController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    let companyId = payload.companyId!
    if (payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') {
        companyId = req.body.companyId
    }

    const p = await findPaymentMethodService({ companyId })

    const payments = p.map((item, i) => ({
        ...item,
        indexNo: i + 1,
        qrPath: item.qrPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.qrPath}` : null,
        qrPathOriginal: item.qrPath
    }))

    res.json({
        status: 'success',
        payments,
        count: 1
    })
}

export const createPaymentMethodController = async (req: Request, res: Response) => {
    const accountName = req.body.accountName
    const accountNumber = req.body.accountNumber
    const companyId = Number(req.body.companyId)
    const qrPath = getPhotoPath(req.file)

    const p = await createPaymentMethodService({
        accountName,
        accountNumber,
        companyId,
        deletedAt: null,
        id: 0,
        qrPath,
        deletedBy: null
    })

    if (!p) {
        res.json({
            status: 'error',
            message: 'ບັນທຶກ ຂໍ້ມູນ ຜິດພາດ ກະລຸນາລອງອີກຄັ້ງ'
        })
    }

    res.json({
        status: 'success',
        message: 'ບັນທຶກຂໍ້ມູນ ສຳເລັດແລ້ວ'
    })
}

export const updatePaymentMethodController = async (req: Request, res: Response) => {
    const accountName = req.body.accountName
    const accountNumber = req.body.accountNumber
    const companyId = Number(req.body.companyId)
    const id = Number(req.body.id)
    const qrPath = getPhotoPath(req.file) ?? req.body.qrPathOriginal

    const p = await updatePaymentMethodService({
        accountName,
        accountNumber,
        companyId,
        deletedAt: null,
        id,
        qrPath,
        deletedBy: null
    })

    if (!p) {
        res.json({
            status: 'error',
            message: 'ບັນທຶກ ຂໍ້ມູນ ຜິດພາດ ກະລຸນາລອງອີກຄັ້ງ'
        })
    }

    res.json({
        status: 'success',
        message: 'ບັນທຶກຂໍ້ມູນ ສຳເລັດແລ້ວ'
    })
}

export const deletePaymentMethodController = async (req: Request, res: Response) => {
    const path = env.PWD + env.FOLDER_UPLOADS + req.body.qrPathOriginal
    const id = Number(req.body.id)
    const payload = tokenPayloadService(req)
    await deletePaymentMethodService(id, payload.companyId!)

    console.log(path)
    console.log('-'.repeat(100))
    try {
        // Check if file exists
        fs.accessSync(path, fs.constants.F_OK)
        // File exists, proceed to delete
        fs.unlinkSync(path)
        console.log('File deleted successfully')
    } catch (err) {
        console.error(err)
        logger.error(err)
    }

    res.json({
        status: 'success',
        message: 'ລົບຂໍ້ມູນ ສຳເລັດແລ້ວ'
    })
}
