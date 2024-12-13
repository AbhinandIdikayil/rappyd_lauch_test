import { IRepo } from "../interfaces/IRepo";
import { IService } from "../interfaces/IService";
import { IUser } from "../interfaces/IUser";
import { IUserModel } from "../model/userModel";
import ErrorResponse from "../utils/CustomError";


export class UserService implements IService {
    constructor(private userRepository: IRepo) { }

    async login_service(data: { email: string, password: string }): Promise<IUserModel> {
        const result = await this.userRepository.findOneByEmail({email:data.email});
        if(!result) throw ErrorResponse.badRequest('User not found');
        const matchPassword = await result?.matchPassword(data.password);
        if(!matchPassword) throw ErrorResponse.badRequest('Incorrect password');
        const {password, ...user} = result.toObject()
        return user;
    }

    async signup_service(data: IUser): Promise<IUserModel> {
        const existingUser = await this.userRepository.findOneByEmail({email:data.email});
        if(existingUser) throw ErrorResponse.badRequest('User already exist');
        const res = await this.userRepository.create(data)
        if (!res) {
            throw ErrorResponse.badRequest('Failed to signup');
        }
        return res;
    }


}