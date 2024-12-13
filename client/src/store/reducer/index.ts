import { createSlice } from '@reduxjs/toolkit'
import { login, Logout, Register } from '../action'
import { IRole } from '@/constants/enum'
interface User {
    name: string,
    email: string,
    role: IRole
}
interface IState {
    user: User | null
}

const initialState: IState = {
    user:null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(Register.pending, (state) => {
            state.user = null
        })
        builder.addCase(Register.fulfilled, (state, { payload }) => {
            state.user = payload.data
        })
        builder.addCase(Register.rejected, (state) => {
            state.user = null
        })
        builder.addCase(login.pending, (state) => {
            state.user = null
        })
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.user = payload.data
        })
        builder.addCase(login.rejected, (state) => {
            state.user = null
        })
        builder.addCase(Logout.pending, (state) => {
            state.user = state.user
        })
        builder.addCase(Logout.fulfilled, (state) => {
            state.user = null
        })
        builder.addCase(Logout.rejected, (state) => {
            state.user = state.user
        })
    }
})

export default userSlice.reducer