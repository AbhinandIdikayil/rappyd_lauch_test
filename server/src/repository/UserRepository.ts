import { IRepo } from "../interfaces/IRepo";
import { IUser } from "../interfaces/IUser";
import { IUserModel, userModel } from "../model/userModel";
import ErrorResponse from "../utils/CustomError";


export class UserRepository implements IRepo {
    async findOneByEmail({ email }: { email: string; }): Promise<IUserModel | null> {
        const result = await userModel.findOne({ email })
        return result;
    }
    async create(data: IUser): Promise<IUserModel> {
        return await userModel.create(data)
    }

    async login(data: { email: string; password: string; }): Promise<IUserModel> {
        const user = await this.findOneByEmail({ email: data.email });
        if (!user) throw ErrorResponse.badRequest('User not found');
        const result = await user.matchPassword(data.password)
        if (!result) throw ErrorResponse.badRequest('Password is incorrect')
        return user;
    }
}