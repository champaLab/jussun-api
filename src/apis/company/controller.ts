import { Request, Response } from 'express'
import { companiesService, createCompanyService, updateCompanyService } from './service'
import { tokenPayloadService } from '../user/service'
import { getPhotoPath } from '../../utils/fileUrl'
import { dateFormatter } from '../../utils/dateFormat'
import env from '../../env'

export const companyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const key = req.body.key
    let companyId = req.body.companyId
    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = req.body.companyId
    } else if (payload.role != 'ADMIN' && payload.role != 'SUPERADMIN') {
        companyId = payload.companyId
    }

    const company = await companiesService({ companyId, key })

    const companyRes = company.map((item) => ({
        ...item,
        logoPath: item.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.logoPath}` : null,
        logoOriginal: item.logoPath,
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))

    return res.json({
        status: 'success',
        company: companyRes
    })
}

export const createCompanyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const abbreviatedLetters = req.body.abbreviatedLetters
    const companyId = req.body.companyId
    const createdBy = payload.userId
    const address = req.body.address
    const companyName = req.body.companyName
    const companyStatus = req.body.companyStatus === 'true'
    const email = req.body.email
    const fax = req.body.fax
    const tel = req.body.tel
    const whatsapp = req.body.whatsapp
    const logoPath = getPhotoPath(req.file) ?? req.body.logoOriginal

    const p = await createCompanyService({
        abbreviatedLetters,
        companyId,
        createdBy,
        address,
        companyName,
        companyStatus,
        email,
        fax,
        logoPath,
        tel,
        whatsapp
    })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ສ້າງບໍລິສັດ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ສ້າງບໍລິສັດ ສຳເລັດແລ້ວ'
    })
}

export const updateCompanyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const abbreviatedLetters = req.body.abbreviatedLetters
    const companyId = Number(req.body.companyId)
    const createdBy = payload.userId
    const address = req.body.address
    const companyName = req.body.companyName
    const companyStatus = req.body.companyStatus === 'true'
    const email = req.body.email
    const fax = req.body.fax
    const tel = req.body.tel
    const whatsapp = req.body.whatsapp
    const logoPath = getPhotoPath(req.file) ?? req.body.logoOriginal

    const p = await updateCompanyService({
        abbreviatedLetters,
        companyId,
        createdBy,
        address,
        companyName,
        companyStatus,
        email,
        fax,
        logoPath,
        tel,
        whatsapp
    })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ແກ້ໄຂຂໍ້ມູນບໍລິສັດ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ແກ້ໄຂຂໍ້ມູນບໍລິສັດ ສຳເລັດແລ້ວ'
    })
}
