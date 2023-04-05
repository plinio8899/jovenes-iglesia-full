import app from './app.js'
import mongo from './Routes/mongodb.js'
import {setPoints, setPointsM} from './Routes/posts.js'
import cors from 'cors'

app.use(cors());

import dotenv from 'dotenv'
dotenv.config()
mongo()
setPoints()
setPointsM()

const port = process.env.PORT


app.listen(port || 3000, () => {
    console.log(`Connected in  http://localhost:${port}`)
})
