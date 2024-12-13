import { IRole } from "@/constants/enum";
import { AXIOS_INSTANCE } from "@/service/axios_instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
interface ILogin {
    email: string,
    password: string,
}
interface IRegister {
    name: string,
    role: IRole,
    email: string,
    password: string,
}
export const Register = createAsyncThunk(
    'user/signup',
    async (req: IRegister, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE.post('/signup', { data: req });
            return data
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue("An unexpected error occurred");
            }
        }
    }
)

export const login = createAsyncThunk(
    'user/login',
    async (req: ILogin, { rejectWithValue }) => {
        try {
            console.log('----')
            const { data } = await AXIOS_INSTANCE.post('/login', { data: req })
            return data
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue("An unexpected error occurred");
            }
        }
    }
)

export const Logout = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await AXIOS_INSTANCE.post('/logout')
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)