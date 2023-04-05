import mongoose from "mongoose"
const Schema = mongoose.Schema

const points_schema = new Schema({
    number: Number,
    description: String
})

//Crear modulo

export const point_agg = mongoose.model('H-Points', points_schema)
