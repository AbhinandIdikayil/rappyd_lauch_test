import { IRepo } from "../interfaces/IRepo";
import { IUser } from "../interfaces/IUser";
import { IUserModel, userModel } from "../model/userModel";
import ErrorResponse from "../utils/CustomError";


export class UserRepository implements IRepo {
    async findOneByEmail({ email }: { email: string; }): Promise<IUserModel | null> {
        const result = await userModel.findOne({ email }).exec()
        return result;
    }
    async create(data: IUser): Promise<IUserModel> {
        return await userModel.create(data);
    }

}