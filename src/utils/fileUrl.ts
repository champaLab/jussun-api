import { Request } from 'express'
import env from '../env'

export const getPhotoPath = (file: Express.Multer.File | undefined) => {
    try {
        let path: string | undefined = file?.path

        if (!path || (path && path.length <= 5)) return null
        path = path.split('uploads').pop()

        return path ?? null
    } catch (error) {
        return null
    }
}
