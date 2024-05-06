import cors from 'cors'
import express from 'express'
import fileUpload from 'express-fileupload'
import * as dotenv from 'dotenv'
import {
    UserRouter,
    CourseRouter,
    AdminRouter,
    PaymentRouter,
    QuestionRouter,
    QuestionOptionRouter,
    TestRouter,
    DirectionRouter,
    InscriptionRouter
} from '../../routes/index.js'

dotenv.config()

export class ServerModel{
    constructor(){
        this.server = express()
    }
    middlewares(){
        this.server.use(fileUpload())
        this.server.use(express.json())
        this.server.use(cors())
        this.server.use(express.static('public'))
    }
    listen(){
        this.server.listen(3030)
    }
    routes(){
        this.server.use('/api/auth/', UserRouter, AdminRouter)
        this.server.use('/api/courses/', CourseRouter)
        this.server.use('/api/payments/', PaymentRouter)
        this.server.use('/api/questions/', QuestionRouter, QuestionOptionRouter, TestRouter)
        this.server.use('/api/directions/', DirectionRouter)
        this.server.use('/api/inscriptions', InscriptionRouter)
    }
}