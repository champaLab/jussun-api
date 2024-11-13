import { Request } from 'express'
import env from '../env'
import { dateFormatter } from './dateFormat'

export function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(null), ms)
    })
}

export function paginate(data: { key: string | null; page: number | null }): { skip: number; take: number } {
    const { key, page } = data
    const _page = !page ? 1 : page
    const skip = key ? 0 : (_page - 1) * env.ROW_PER_PAGE
    const take = env.ROW_PER_PAGE

    return { skip, take }
}

export function setFileName(length: number = 25): string {
    let text = ''
    const possible = 'abcdefghijklmnopqrstuvwxyz012345678ASDFGHJKLZXCVBNMQWERTYUIOP'
    for (let i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
}

export function getPhotoUrl(req: Request, file: string) {
    const date = file.substring(0, 8)
    return `${req.protocol}://${req.headers.host}/photo/${date}/${file}`
}

export function getPassportUrl(req: Request, file: string) {
    const date = file.substring(0, 8)
    return `${req.protocol}://${req.headers.host}/passport/${date}/${file}`
}
export function getThumbnailUrl(req: Request, file: string) {
    const date = file.substring(0, 8)
    return `${req.protocol}://${req.headers.host}/article/${date}/${file}`
}

export const responseData = async (data: any, page: number) => {
    const rowsPerPage = Number(env.ROW_PER_PAGE)
    const newData =
        data.length == 0
            ? []
            : data.map((item, i) => ({
                  ...item,
                  indexNo: (page - 1) * rowsPerPage + (i + 1),
                  createdAt: dateFormatter(item.createdAt),
                  updatedAt: dateFormatter(item.updatedAt),
                  cancelAt: dateFormatter(item.cancelAt)
              }))

    return newData
}
