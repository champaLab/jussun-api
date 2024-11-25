import { Request, Response } from 'express'
import env from '../env'

export const helpCheck = (_: Request, res: Response) => {
    res.json({
        status: 'OK',
        upTime: process.uptime(),
        timestamp: Date.now(),
        instance: process.env.NODE_APP_INSTANCE,
        service: env.SERVICE_NAME,
        base_path: env.BASE_PATH
    })
}
