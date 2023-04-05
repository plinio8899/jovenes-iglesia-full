import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const user = process.env.USER
const pass = process.env.PASS
const dbname = process.env.DB_NAME

const uri = `mongodb+srv://${user}:${pass}@cluster0.7dquy.mongodb.net/${dbname}?retryWrites=true&w=majority`

const mongo = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Conectado a mongodb"))
    .catch((e) => console.log("No se pudo conectar con mongodb", e))
}

export default mongo;