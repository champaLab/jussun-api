import { NextFunction, Request, Response } from 'express'
import jwt, { SignOptions } from 'jsonwebtoken'
import env from '../env'
import logger from '../configs/winston'
import { logNamespace } from '../log'

const i = 'Champa Lab' // Issuer (Software organization who issues the token)
const s = 'sonephetmnlv@gmail.com' // Subject (intended user of the token)
const a = 'https://champalab.com' // Audience (Domain within which this token will live and function)

const optionsToken: SignOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: '10h',
    algorithm: 'PS512'
}

export const sign = async (payload: object) => {
    try {
        const privateKEY = env.JWT_PRIVATE_KEY
        return jwt.sign(payload, privateKEY, optionsToken)
    } catch (error) {
        logger.error(error)
        console.error(error)
        return null
    }
}

export const verify = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers['x-access-token'] as string

    if (req.headers.authorization) {
        token = `${req.headers.authorization}`.replace('Bearer ', '')
    }
    if (!token) return res.json({ status: 'error', message: 'No token provided.' })

    const publicKEY = env.JWT_PUBLIC_KEY ?? ''

    jwt.verify(token, publicKEY, optionsToken, (err, decoded) => {
        if (err) {
            return res.json({ status: 'invalid', message: 'Token unauthorized.' })
        }
        if (decoded) {
            // const payload = decoded as data
            // logNamespace.run(() => {
            //     if (payload.username) logNamespace.set('username', payload.username)
            //     if (payload.shopId) logNamespace.set('shopId', payload.shopId)
            //     if (payload.userId) logNamespace.set('userId', payload.userId)
            //     if (payload.role) logNamespace.set('role', payload.role)
            //     if (payload.fullName) logNamespace.set('fullName', payload.fullName)
            // })

            // @ts-ignore
            req.tokenPayload = decoded
        }
        next()
    })
}
