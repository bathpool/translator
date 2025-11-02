import express from 'express'
import { getTranslation } from '../controllers/getTranslation.js'

export const apiRoutes = express.Router()

apiRoutes.post('/', getTranslation)