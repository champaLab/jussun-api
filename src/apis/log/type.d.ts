export interface Report {
    amount: number | null
    contractId: number | null
    currency: string
    paymentMethod: string
    paidDate: Date
    createdBy: Date
    createdAt: Date
}

export interface TReport {
    companyName: string | null
    userId: number | null
    key: string | null | undefined
    page: number
    dateStart: string
    dateEnd: string
}
