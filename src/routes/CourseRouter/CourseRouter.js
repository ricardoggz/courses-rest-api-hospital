import { Router } from 'express'
import { getCourses, courseLogin } from '../../controllers/index.js'

export const CourseRouter = Router()
CourseRouter
    .get('/all-courses', getCourses)
    .post('/course-login', courseLogin)