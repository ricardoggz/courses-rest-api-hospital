import { Router } from 'express'
import {
    getPayments,
    addPayment,
    editPayment
} from '../../controllers/index.js'

export const PaymentRouter = Router()
PaymentRouter
    .get('/all-payments', getPayments)
    .post('/add-payment', addPayment)
    .put('/edit-payment', editPayment)