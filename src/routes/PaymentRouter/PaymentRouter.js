import { Router } from 'express'
import {
    getPayments,
    addPayment
} from '../../controllers/index.js'

export const PaymentRouter = Router()
PaymentRouter
    .get('/all-payments', getPayments)
    .post('/add-payment', addPayment)