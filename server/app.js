import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import compression from 'compression';
import dotenv from 'dotenv'
import postsRouter from './Routes/posts.js'
import authRouter from './Routes/auth.js'

const app = express()

app.use(cors());
app.use(compression());
dotenv.config()
app.use(express.json())
//Creando el enrutador en un modulo aparte

app.use('/', postsRouter)
app.use('/auth', authRouter)

app.use(express.static('../client/dist'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

export default app;
