import bcrypt from 'bcrypt'

export const encrypt = async(passText) => {
    const passHash = await bcrypt.hash(passText, 8)
    return passHash
}
export const compare = async(passTxt, passHash) => {
   return await bcrypt.compare(passTxt, passHash)
}