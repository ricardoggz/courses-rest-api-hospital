import { Router } from "express"
import { userLogin, updateUser } from "../../controllers/index.js"
export const UserRouter = Router()

UserRouter
    .post('/login-user', userLogin)
    .put('/update-user/:id', updateUser)