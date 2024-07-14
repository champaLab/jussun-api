import { Request } from 'express'
import env from '../env'
import { dateFormatter } from './dateFormat'

export function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(null), ms)
    })
}

export function paginate(totalItems: number, currentPage: number = 1, pageSize: number = 25, maxPages: number = 10) {
    let total_pages = Math.ceil(totalItems / pageSize)

    if (currentPage < 1) {
        currentPage = 1
    } else if (currentPage > total_pages) {
        currentPage = total_pages
    }

    let start_page: number, end_page: number
    if (total_pages <= maxPages) {
        start_page = 1
        end_page = total_pages
    } else {
        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1
        if (currentPage <= maxPagesBeforeCurrentPage) {
            start_page = 1
            end_page = maxPages
        } else if (currentPage + maxPagesAfterCurrentPage >= total_pages) {
            start_page = total_pages - maxPages + 1
            end_page = total_pages
        } else {
            start_page = currentPage - maxPagesBeforeCurrentPage
            end_page = currentPage + maxPagesAfterCurrentPage
        }
    }

    let startIndex = (currentPage - 1) * pageSize
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    let pages = Array.from(Array(end_page + 1 - start_page).keys()).map((i) => start_page + i)

    return {
        total_items: totalItems,
        current_page: currentPage,
        page_size: pageSize,
        total_pages: total_pages,
        start_page: start_page,
        end_page: end_page,
        start_index: startIndex,
        end_index: endIndex,
        pages: pages
    }
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

export const responseData = async (data: any) => {
    const newData =
        data.length == 0
            ? []
            : data.map((item) => ({
                  ...item,
                  createdAt: dateFormatter(item.createdAt),
                  updatedAt: dateFormatter(item.updatedAt)
              }))

    return newData
}
