export interface TPaymentMethod {
    id:            number;
    companyId:     number;
    accountName:   string;
    accountNumber: string;
    qrPath:        null;
    deletedAt:     Date;
}
