import jwt from 'jsonwebtoken'
import { CONFIG } from '../config/env'

export const generateToken = (id: unknown) => {
    return jwt.sign({id},CONFIG.JWT_SECRET,{expiresIn:'12d'})
}