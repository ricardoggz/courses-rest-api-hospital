import { Router } from 'express'
import {
    getQuestionsOptions,
    deleteQuestionOption,
    editQuestionOption,
    addQuestionOption
} from '../../controllers/index.js'

export const QuestionOptionRouter = Router()
QuestionOptionRouter
    .get('/all-courses-options', getQuestionsOptions)
    .post('/add-course-option', addQuestionOption)
    .delete('/delete-course-option', deleteQuestionOption)
    .put('/edit-course-option/:id', editQuestionOption)