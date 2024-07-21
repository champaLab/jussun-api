export interface Report {
    amount: number | null
    contractId: number | null
    currency: string
    paymentMethod: string
    paidDate: Date
    createdBy: Date
    createdAt: Date
}