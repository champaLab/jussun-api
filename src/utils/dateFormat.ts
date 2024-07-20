import dayjs from 'dayjs'
import 'dayjs/locale/lo'
import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(updateLocale)

export function dateFormatService(date: string) {
    return dayjs(date).format('YYYY-MM-DD')
}

//
export const dateDir = dayjs().format('YYYYMMDD')
export function dateTimeFormat(date: Date | string | any): string {
    // const result = dayjs(date).tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss')
    const result = dayjs(date).format('YYYY-MM-DD HH:mm:ss')
    if (result.includes('Invalid')) {
        return ''
    }
    return result
}

export const today = (date = new Date()) => {
    return dayjs(dayjs(date).add(7, 'hours').format()).toDate()
}

export const dateFormatter = (date: any | null) => {
    console.log({ date })
    if (date && date != null && date != '') return dayjs(date).locale('lo').format('DD MMM YYYY HH:mm')
    return null
}
