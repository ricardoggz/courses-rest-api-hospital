import { Router } from 'express'
import {
    getDirections, 
    getInvestigatorsById, 
    getInvestigators
} from '../../controllers/index.js'

export const DirectionRouter = Router()
DirectionRouter
    .get('/all-directions', getDirections)
    .get('/all-investigators/:id', getInvestigatorsById)
    .get('/all-investigators', getInvestigators)