export interface ResContract {
    contractId: number
    companyId: number
    docId: string
    createdBy: string
    updatedBy: number
    projectId: number
    price: number
    totalPrice: number
    currency: string
    contractStatus: string
    area: number
    numberOfInstallment: number
    payDay: Date
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
    telCustomerOne: string
    customerTwo: null
    telCustomerTwo: string
    projectName: string
    companyName: string
    address: string
    companyContact: string
    logoPath: string
}

export interface ResInvoice {
    invoiceId: number
    fines: number
    amount: number
    debt: number
    contractId: number
    currency: string
    comment: null
    monthly: string
    paymentMethod: null | string
    exchangeRate: null
    currencyExchange: null
    invoiceStatus: string
    billPath: null
    paidDate: Date | null
    createdBy: number | null
    createdAt: Date
    updatedAt: Date | null
    reservedBy: number | null
    reservedAt: Date | null
    remindSentTime: number
    remindSentDate: Date | null
    recieptBy: null | string
}
