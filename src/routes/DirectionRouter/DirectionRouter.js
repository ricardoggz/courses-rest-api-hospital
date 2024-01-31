import { Router } from 'express'
import {
    getDirections
} from '../../controllers/index.js'

export const DirectionRouter = Router()
DirectionRouter
    .get('/all-directions', getDirections)