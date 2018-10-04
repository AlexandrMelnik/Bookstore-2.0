import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const jwtConfig = data =>
 jwt.sign(data, process.env.SECRET_KEY);
