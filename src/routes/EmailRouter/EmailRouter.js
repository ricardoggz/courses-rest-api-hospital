import { Router } from "express"
import { sendEmail } from "../../controllers/index.js"

export const EmailRouter = Router()

EmailRouter.post('/send-email', sendEmail)