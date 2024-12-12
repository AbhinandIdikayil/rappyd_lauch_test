import { IRepo } from "../interfaces/IRepo";
import { IService } from "../interfaces/IService";
import { IUser } from "../interfaces/IUser";
import { IUserModel } from "../model/userModel";
import ErrorResponse from "../utils/CustomError";


export class UserService implements IService {
    constructor(private userRepository: IRepo) { }

    async login_service(data: { email: string, password: string }): Promise<IUserModel> {
        const result = await this.userRepository.login(data);
        return result;
    }

    async signup_service(data: IUser): Promise<IUserModel> {
        const res = await this.userRepository.create(data)
        if (!res) {
            throw ErrorResponse.badRequest('Failed to signup');
        }
        return res;
    }


}