import { IRole } from "@/constants/enum";
import { z } from "zod";

export const SignupFormSchema = z.object({
    name: z.string({ required_error: 'Name is required' }).nonempty({ message: 'Name is required' }),
    email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invaild email address' }),
    role: z.enum([IRole.Student, IRole.Teacher], {
        required_error: 'Role is required',  // Custom required error message
        invalid_type_error: 'Role is required',
    }),
    password: z.string({ required_error: 'Password is required' }).nonempty({ message: 'Password is required' })
})