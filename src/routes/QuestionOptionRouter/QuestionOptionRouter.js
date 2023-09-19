import { Router } from 'express'
import {
    getQuestionsOptions,
    deleteQuestionOption,
    editQuestionOption,
    addQuestionOption
} from '../../controllers/index.js'

export const QuestionOptionRouter = Router()
QuestionOptionRouter
    .get('/all-questions-options', getQuestionsOptions)
    .post('/add-question-option', addQuestionOption)
    .delete('/delete-question-option', deleteQuestionOption)
    .put('/edit-question-option/:id', editQuestionOption)