import {point_agg_m} from '../models/schema_points_m.js'
import {point_agg} from '../models/schema_points.js'

export const postHpoints = async (req, res) => {
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
}

export const getHpoints = async (req, res) => {
    try {
        const data = await point_agg.find({});
        res.setHeader('Accept-Encoding', 'gzip, compress, br')
        res.send({data})
    } catch (error) {
        console.log(error)
    }
}

export const postMpoints = async (req, res) => {
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
}

export const getMpoints = async (req, res) => {
    try {
        const data = await point_agg_m.find({});
        res.setHeader('Accept-Encoding', 'gzip, compress, br')
        res.send({data})
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}