import app from '../app.js'
import {point_agg} from '../Models/schema_points.js'
import bodyParser from 'body-parser'
import {point_agg_m} from '../Models/schema_points_m.js'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

export function setPoints() {
    app.post('/h-points', async (req, res) => {
        const body = req.body
        console.log(body)
        try {
            const pointdb = new point_agg(body)
            await pointdb.save()
            res.send("recibido")
        } catch (error) {
            console.error("No se pudo guardar en la base de datos: ", error)
            res.send("No se pudo guardar en la base de datos")
        }
    })

    app.get("/h-points", async (req, res) => {
        try {
            const data = await point_agg.find({});
            res.send({data})
        } catch (error) {
            console.log(error)
        }
    })
} 

export function setPointsM() {
    app.post('/m-points', async (req, res) => {
        const body = req.body
        console.log(body)
        try {
            const pointdb = new point_agg_m(body)
            await pointdb.save()
            res.send("recibido")
        } catch (error) {
            console.error("No se pudo guardar en la base de datos: ", error)
            res.send("No se pudo guardar en la base de datos")
        }
    })

    app.get('/m-points', async (req, res) => {
        try {
            const data = await point_agg_m.find({});
            res.send({data})
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })
} 
