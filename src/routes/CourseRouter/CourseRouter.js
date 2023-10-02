import { Router } from 'express'
import {
    getCourses,
    courseLogin,
    deleteCourse,
    editCourse,
    addCourse,
    editTestCourse,
    getTestCourse
} from '../../controllers/index.js'

export const CourseRouter = Router()
CourseRouter
    .get('/all-courses', getCourses)
    .post('/course-login', courseLogin)
    .delete('/delete-course', deleteCourse)
    .put('/edit-course/:id', editCourse)
    .post('/add-course', addCourse)
    .put('/edit-test-course/:id', editTestCourse)
    .get('/get-test-course/:id', getTestCourse)