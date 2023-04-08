import app from './app.js'
import dbconnect from './mongodb.js'



const port = process.env.PORT


app.listen(port || 3000, () => {
    console.log(`Connected in  http://localhost:${port}`)
})

dbconnect()