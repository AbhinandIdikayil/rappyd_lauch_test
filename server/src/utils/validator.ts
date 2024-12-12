import * as Joi from 'joi'
import { IRole } from '../constants';

export const loginVaildator = Joi.object({
    email: Joi.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Email must be a valid email address"
    }),
    password: Joi.string().min(4).required(),
});

export const signupValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    role: Joi.string().valid(IRole.Teacher, IRole.Student).required(),
});