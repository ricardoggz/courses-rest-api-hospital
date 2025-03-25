import { Router } from 'express'
import {
    getDirections, 
    getInvestigators
} from '../../controllers/index.js'

export const DirectionRouter = Router()
DirectionRouter
    .get('/all-directions', getDirections)
    .get('/all-investigators/:id', getInvestigators)