import { IUserModel } from "../model/userModel";
import { IUser } from "./IUser";


export interface IService {
    login_service(data:{email: string, password: string}): Promise<IUserModel>
    signup_service(data:IUser): Promise<IUserModel>
}