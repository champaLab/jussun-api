import { Request, Response } from 'express'
import { companiesService, createCompanyService, updateCompanyService } from './service'
import { tokenPayloadService } from '../user/service'
import { getPhotoPath } from '../../utils/fileUrl'
import { dateFormatter } from '../../utils/dateFormat'
import env from '../../env'

export const companyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const key = req.body.key
    const page = req.body.page
    let companyId = req.body.companyId
    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = req.body.companyId
    } else if (payload.role != 'ADMIN' && payload.role != 'SUPERADMIN') {
        companyId = payload.companyId
    }

    const result = await companiesService({ companyId, key, page })

    const companyRes = result.companies.map((item, i) => ({
        ...item,
        indexNo: (i + 1) * page,
        logoPath: item.logoPath ? `${env.HOST_IMAGE}${env.BASE_PATH}${item.logoPath}` : null,
        logoOriginal: item.logoPath,
        createdAt: dateFormatter(item.createdAt),
        updatedAt: dateFormatter(item.updatedAt)
    }))

    return res.json({
        status: 'success',
        company: companyRes,
        count: result.count
    })
}

export const createCompanyController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const abbreviatedLetters = req.body.abbreviatedLetters != 'null' ? req.body.abbreviatedLetters : null
    const companyId = req.body.companyId != 'null' ? req.body.companyId : null
    const createdBy = payload.userId
    const address = req.body.address != 'null' ? req.body.address : null
    const companyName = req.body.companyName != 'null' ? req.body.companyName : null
    const companyStatus = req.body.companyStatus === 'true'
    const email = req.body.email != 'null' ? req.body.email : null
    const fax = req.body.fax != 'null' ? req.body.fax : null
    const tel = req.body.tel != 'null' ? req.body.tel : null
    const whatsapp = req.body.whatsapp != 'null' ? req.body.whatsapp : null
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
    const abbreviatedLetters = req.body.abbreviatedLetters != 'null' ? req.body.abbreviatedLetters : null
    const companyId = req.body.companyId != 'null' ? req.body.companyId : null
    const createdBy = payload.userId
    const address = req.body.address != 'null' ? req.body.address : null
    const companyName = req.body.companyName != 'null' ? req.body.companyName : null
    const companyStatus = req.body.companyStatus === 'true'
    const email = req.body.email != 'null' ? req.body.email : null
    const fax = req.body.fax != 'null' ? req.body.fax : null
    const tel = req.body.tel != 'null' ? req.body.tel : null
    const whatsapp = req.body.whatsapp != 'null' ? req.body.whatsapp : null
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
