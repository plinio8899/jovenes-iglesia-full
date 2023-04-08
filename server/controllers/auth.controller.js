import {encrypt} from '../utils/handlePassword.js'
import {registerUserLogin, registerUserInfo} from '../services/authService.js'

export const userLogin = (req, res) => {
    res.send('Login')
}
export const userRegister = async(req, res) => {
    try {
        const {usuario, pass, rol, estado_cuestionario} = req.body
        const passHash = await encrypt(pass)
        const id = await registerUserLogin(usuario, passHash)
        registerUserInfo(id, rol, estado_cuestionario)
        res.send({
            usuario
        })
    } catch (error) {
        res.status(403).json({
            message: error
        })
    }
}