export interface Receive {
    amount: number | null
    contractId: number | null
    currency: string
    paymentMethod: string
    paidDate: Date
    createdBy: Date
    createdAt: Date
}