import { Document, model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import { IRole } from '../constants';

export interface IUserModel extends Document {
    name: string,
    email: string
    password: string,
    role: IRole,
    matchPassword(enteredPassword: string): Promise<true>,
    hashPassword(password: string): Promise<any>
}

const userSchema = new Schema<IUserModel>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

userSchema.methods.matchPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


export const userModel = model<IUserModel>('users', userSchema)