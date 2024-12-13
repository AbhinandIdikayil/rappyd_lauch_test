import mongoose from 'mongoose'
import { CONFIG } from './env';

export const dbConnection = async () => {
    try {
        await mongoose.connect(CONFIG.MONGO_URI);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}