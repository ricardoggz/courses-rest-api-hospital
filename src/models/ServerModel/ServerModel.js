import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'
import { UserRouter, CourseRouter } from '../../routes/index.js'

dotenv.config()

export class ServerModel{
    constructor(){
        this.server = express()
    }
    middlewares(){
        this.server.use(express.json())
        this.server.use(cors({
            origin: process.env.CORS
        }))
        this.server.use(express.static('public'))
    }
    listen(){
        this.server.listen(3030)
    }
    routes(){
        this.server.use('/api/auth/', UserRouter)
        this.server.use('/api/courses/', CourseRouter)
    }
}