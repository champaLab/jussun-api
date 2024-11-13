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
