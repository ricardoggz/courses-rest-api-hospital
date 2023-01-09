import { Router } from 'express'
import { getCourses } from '../../controllers/index.js'

export const CourseRouter = Router()
CourseRouter
    .get('/all-courses', getCourses)