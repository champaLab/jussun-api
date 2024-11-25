import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const valResult = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.json({ status: 'error', messages: errors.array() })
    }
    next()
}
