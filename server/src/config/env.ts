import { config } from 'dotenv';
config();
export const CONFIG = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.SECRET || 'SECRET',
    MONGO_URI: process.env.MONGO_URL as string,
    ClIENT: process.env.CLIENT as string
}