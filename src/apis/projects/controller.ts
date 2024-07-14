import { Request, Response } from 'express'
import { createProjectService, projectsService, updateProjectService } from './service'
import { tokenPayloadService } from '../user/service'
import { responseData } from '../../utils/functions'

export const projectsController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    let companyId = req.body.companyId
    const key = req.body.key
    const page = req.body.page ? Number(req.body.page) : 1

    if ((payload.role === 'ADMIN' || payload.role === 'SUPERADMIN') && companyId) {
        companyId = Number(companyId)
    } else {
        companyId = payload.companyId
    }

    const p = await projectsService({ companyId, key, page })
    const projects = await responseData(p)

    return res.json({
        status: 'success',
        projects
    })
}

export const createProjectController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const area = Number(req.body.area)
    const companyId = payload.companyId
    const createdBy = payload.userId
    const projectName = req.body.projectName
    const address = req.body.address

    if (!companyId) {
        return res.json({
            status: 'error',
            message: 'Company ID is required'
        })
    }

    const p = await createProjectService({ area, companyId, createdBy, projectName, address })
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

export const updateProjectController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const projectId = Number(req.body.projectId)
    const area = Number(req.body.area)
    const companyId = Number(req.body.companyId)
    const createdBy = payload.userId
    const projectName = req.body.projectName
    const address = req.body.address

    const p = await updateProjectService(projectId, { area, companyId, createdBy, projectName, address })
    if (!p) {
        return res.json({
            status: 'error',
            message: 'ແກ້ໄຂໂຄງການ ຜິດພາດ ລອງໃໝ່ໃນພາຍຫຼັງ'
        })
    }

    return res.json({
        status: 'success',
        message: 'ແກ້ໄຂໂຄງການ ສຳເລັດແລ້ວ'
    })
}
