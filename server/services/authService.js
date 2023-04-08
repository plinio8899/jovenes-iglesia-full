import {pool} from '../mysql.js'

export const registerUserLogin = async (usuario, passHash) => {
    const [rows] = await pool.query('INSERT INTO usuarios (usuario, pass) VALUES (?, ?)', [usuario, passHash])
    return rows.insertId
}

export const registerUserInfo = async (id, rol, estado_cuestionario) => {
    const [rows] = await pool.query('INSERT INTO info_usuarios (id_usuario, rol, estado_cuestionario) values (?, ?, ?)', [id, rol, estado_cuestionario])
    return rows
}