import { Router } from 'express'
import {
    getPosgradeInscriptions,
    getPregradeInscriptions
} from '../../controllers/index.js'

export const InscriptionRouter = Router()
InscriptionRouter
    .get('/all-pregrade-inscriptions', getPregradeInscriptions)
    .get('/all-posgrade-inscriptions', getPosgradeInscriptions)