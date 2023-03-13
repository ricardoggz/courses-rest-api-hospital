import { Router } from "express"
import { adminLogin } from '../../controllers/index.js'
export const AdminRouter = Router()

AdminRouter.post('/login-admin', adminLogin)