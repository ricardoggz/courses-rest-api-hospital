import express from "express"
import { DatabaseModel, UserModel } from "./models/index.js"
import { UserController } from './controllers/index.js'

const app = express()
app.get('/', UserController)
app.use(express.json())
app.listen(3030)