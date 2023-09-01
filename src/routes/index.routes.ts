import { Router } from "express";
import converterRouter from './subroutes/converter.routes'

const router = Router()

router.use('/converter', converterRouter)

export default router