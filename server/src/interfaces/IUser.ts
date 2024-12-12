import { IRole } from "../constants";

export interface IUser {
    name: string,
    email: string
    password: string,
    role: IRole,
} 

