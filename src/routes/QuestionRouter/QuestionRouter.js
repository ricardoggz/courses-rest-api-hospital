import { Router } from 'express'
import {
    getQuestions,
    addQuestion,
    deleteQuestion,
    editQuestion
} from '../../controllers/index.js'

export const QuestionRouter = Router()
QuestionRouter
    .get('/all-questions', getQuestions)
    .post('/add-question', addQuestion)
    .put('/edit-question/:id', editQuestion)
    .delete('/delete-question', deleteQuestion)