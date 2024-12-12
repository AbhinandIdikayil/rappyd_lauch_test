import mongoose from 'mongoose'

export const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost/rapid')
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}