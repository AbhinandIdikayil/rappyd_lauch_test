import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invaild email address' }),
    password: z.string({ required_error: 'Password is required' }).nonempty({ message: 'Password is required' })
});