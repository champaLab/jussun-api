export interface THistoryPay {
    contractId: number
    companyId: number
    docId: string
    createdBy: number
    updatedBy: number
    projectId: number
    price: number
    totalPrice: number
    currency: string
    contractStatus: string
    area: number
    numberOfInstallment: number
    payDay: number
    modeOfPayment: string
    payInAdvance: number
    customerIdOne: number
    customerIdTwo: null
    createdAt: Date
    updatedAt: null
    cancelAt: null
    cancelBy: null
    reason: null
    lastInvoice: number
    customerOne: string
    customerTwo: null
}
