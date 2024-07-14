import { Request, Response } from 'express'
import { createProjectService, projectsService, updateProjectService } from './service'
import { tokenPayloadService } from '../user/service'

export const projectsController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const companyId = payload.role === 'ADMIN' || payload.role === 'SUPERADMIN' ? req.body.companyId : payload.companyId

    const projects = await projectsService({ companyId })
    return res.json({
        status: 'success',
        projects
    })
}

export const createProjectController = async (req: Request, res: Response) => {
    const payload = tokenPayloadService(req)
    const area = req.body.area
    const companyId = req.body.companyId
    const createdBy = payload.userId
    const projectName = req.body.projectName
    const address = req.body.address

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
    const area = req.body.area
    const companyId = req.body.companyId
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
