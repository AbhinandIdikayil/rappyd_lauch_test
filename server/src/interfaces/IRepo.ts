import { IUserModel } from "../model/userModel";
import { IUser } from "./IUser";

export interface IRepo {
    findOneByEmail({ email }: { email: string }): Promise<IUserModel | null>,
    create(data: IUser): Promise<IUserModel>
    // login(data: { email: string, password: string }): Promise<IUserModel>;
}