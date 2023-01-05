import { Router } from "express"
import { userLogin } from "../../controllers/index.js"
export const UserRouter = Router()

UserRouter.post('/login-user', userLogin)