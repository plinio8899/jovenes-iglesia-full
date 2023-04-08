import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MSQ_NAME
})