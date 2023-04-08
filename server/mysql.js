import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'containers-us-west-5.railway.app',
    port: 5584,
    user: 'root',
    password: 'V3UZXcsJKpIJgBnchgwz',
    database:'railway'
})