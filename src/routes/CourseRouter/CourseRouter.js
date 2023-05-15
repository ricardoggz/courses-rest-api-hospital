import { Router } from 'express'
import { getCourses, courseLogin, deleteCourse } from '../../controllers/index.js'

export const CourseRouter = Router()
CourseRouter
    .get('/all-courses', getCourses)
    .post('/course-login', courseLogin)
    .delete('/delete-course', deleteCourse)