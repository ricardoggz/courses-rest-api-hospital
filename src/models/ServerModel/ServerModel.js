import cors from 'cors'
import express from 'express'
import { UserRouter, CourseRouter } from '../../routes/index.js'

export class ServerModel{
    constructor(){
        this.server = express()
    }
    middlewares(){
        this.server.use(express.json())
        this.server.use(cors())
    }
    listen(){
        this.server.listen(3030)
    }
    routes(){
        this.server.use('/api/auth/', UserRouter)
        this.server.use('/api/courses/', CourseRouter)
    }
}