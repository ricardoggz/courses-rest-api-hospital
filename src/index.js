import express from "express"
import { UserController, getCourses } from './controllers/index.js'

const app = express()
app.get('/', UserController)
app.get('/courses', getCourses)
app.use(express.json())
app.listen(3030)