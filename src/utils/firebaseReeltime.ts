import * as admin from 'firebase-admin'
import * as serviceAccount from './jutsun-a5d81-firebase-adminsdk-mo29l-a856c863cd.json'
import dayjs from 'dayjs'
import env from '../env'

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: env.FIREBASE_DATABASE_URL
})

const database = admin.database()

export type DataFirebaseRealtime = {
    companyId: number | null
    invoiceId: number | null
    userId: number | null
    action: 'RESERVE' | 'RELOAD' | 'CANCEL'
}

//  Set up a listener to receive data
export const publishRealtime = async (data: DataFirebaseRealtime) => {
    try {
        const { companyId, invoiceId, userId, action } = data
        const path = `/invoice/${companyId}`

        const invoiceRef = database.ref(path)
        await invoiceRef.set({
            id: dayjs().unix(),
            companyId: companyId,
            invoiceId,
            userId,
            action
        })
        console.log('publishRealtime', data)
        return true
    } catch (error) {
        return null
    }
}
