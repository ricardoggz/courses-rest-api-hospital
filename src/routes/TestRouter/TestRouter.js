import { Router } from 'express'
import {
    getTests,
    addTest,
    deleteTest,
    editTest
} from '../../controllers/index.js'

export const TestRouter = Router()
TestRouter
    .get('/all-tests', getTests)
    .post('/add-test', addTest)
    .put('/edit-test/:id', editTest)
    .delete('/delete-test', deleteTest)