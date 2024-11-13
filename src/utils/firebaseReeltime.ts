// import { initializeApp, database, credential, ServiceAccount } from 'firebase-admin'
// import dayjs from 'dayjs'
// import env from '../env'
// const serviceAccount = require('./jutsun-a5d81-firebase-adminsdk-mo29l-a856c863cd.json')

// initializeApp({
//     credential: credential.cert(serviceAccount as ServiceAccount),
//     databaseURL: env.FIREBASE_DATABASE_URL
// })

// const databaseClient = database()

// export type DataFirebaseRealtime = {
//     companyId: number | null
//     invoiceId: number | null
//     userId: number | null
//     action: 'RESERVE' | 'RELOAD' | 'CANCEL'
// }

// //  Set up a listener to receive data
// export const publishRealtime = async (data: any) => {
//     try {
//         const { companyId, invoiceId, userId, action } = data
//         const path = `/invoice/${companyId}`

//         const invoiceRef = databaseClient.ref(path)
//         await invoiceRef.set({
//             id: dayjs().unix(),
//             companyId: companyId,
//             invoiceId,
//             userId,
//             action
//         })
//         console.log('publishRealtime', data)
//         return true
//     } catch (error) {
//         return null
//     }
// }

export const publishRealtime = async (data: any) => {}
