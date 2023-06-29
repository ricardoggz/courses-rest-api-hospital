import { Router } from 'express'
import {
    getPayments
} from '../../controllers/index.js'

export const PaymentRouter = Router()
PaymentRouter
    .get('/all-payments', getPayments)