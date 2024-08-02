import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, set } from 'firebase/database'
import { actionInvoiceService } from '../apis/invoice/service'
import dayjs from 'dayjs'

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

// Reference to your specific path
const companyId = 'some-company-id' // Replace with actual company ID

export type DataFirebaseRealtime = {
    companyId: number | null
    invoiceId: number | null
    userId: number | null
    action: 'RESERVE' | 'RELOAD' | 'CANCEL'
}

// Set up a listener to receive data
export const publishRealtime = async (data: DataFirebaseRealtime) => {
    const { companyId, invoiceId, userId, action } = data
    const invoiceRef = ref(database, `/invoice/${companyId}`)
    await set(invoiceRef, {
        id: dayjs().unix(),
        companyId: companyId,
        invoiceId,
        userId,
        action
    })
}
