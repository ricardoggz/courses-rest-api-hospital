import express from "express"
import cors from 'cors'
import { UserController, getCourses } from './controllers/index.js'

const app = express()
app.use(express.json())
app.use(cors())
app.get('/', UserController)
app.get('/courses', getCourses)
app.listen(3030)