import { Response } from 'express'
import logger from '../configs/winston'

export const handlerResponse = ({ res, message, error }: { res: Response; message?: string; error: any }) => {
    logger.error(error)
    console.error(error)
    res.status(500).json({
        status: 'error',
        message: message || 'Internal Server Error'
    })
}
