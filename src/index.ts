import 'dotenv/config'

import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

import indexRouter from './routes/index.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(helmet())
app.use(cors({origin: process.env.CLIENT_URI}))

app.use('/api', indexRouter)

export default app