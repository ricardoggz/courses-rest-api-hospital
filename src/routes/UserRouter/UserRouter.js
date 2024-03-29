import { Router } from "express"
import { updateUser, createUser, getUsers, userLogin, updateTaxUserData} from "../../controllers/index.js"
export const UserRouter = Router()

UserRouter.put('/update-user/:id', updateUser)
UserRouter.post('/create-user', createUser)
UserRouter.get('/all-users', getUsers)
UserRouter.post('/login-user', userLogin)
UserRouter.put('/update-user-tax-data/:id', updateTaxUserData)