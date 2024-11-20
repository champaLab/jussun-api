import { invoice } from '../../../prisma-client'

export interface TUserPayloadModel {
    userId: number
    tel: string
    role: string
    fullName: string
    userStatus: boolean
    companyTel: string | null
    companyId: number | null
    fax: string | null
    logoPath: string | null
    companyName: string | null
    address: string | null
    email: string | null
    abbreviatedLetters: string | null
}
export interface TUserCreateModel {
    tel: string
    companyId: number | null
    fullName: string
    lastName: string
    password: string
    role: string
    userStatus: boolean
}
export interface TPaidInvoice {
    invoiceStatus: string
    amount: number
    currency: string
    debt: number
    fines: number
    paidDate: Date
    updatedAt: Date
    paymentMethod: string
    invoiceId: number
    exchangeRate: number | null
    currencyExchange: string | null
    createdBy: number | null
    comment: string | null
}
export interface TUserPayloadModel {
    userId: number
    tel: string
    role: string
    fullName: string
    userStatus: boolean
    companyTel: string | null
    companyId: number | null
    fax: string | null
    logoPath: string | null
    companyName: string | null
    address: string | null
    email: string | null
    abbreviatedLetters: string | null
}
export interface TUserCreateModel {
    tel: string
    companyId: number | null
    fullName: string
    lastName: string
    password: string
    role: string
    userStatus: boolean
}
export interface TResponseModel {
    invoices: any[]
    count: number
}
