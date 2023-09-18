import { Router } from 'express'
import {
    getQuestions,
    addQuestion
} from '../../controllers/index.js'

export const QuestionRouter = Router()
QuestionRouter
    .get('/all-questions', getQuestions)
    .post('/add-question', addQuestion)