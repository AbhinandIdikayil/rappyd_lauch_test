import { NextFunction, Request, Response } from "express";
import { IService } from "../interfaces/IService";
import { loginVaildator, signupValidator } from "../utils/validator";
import ErrorResponse from "../utils/CustomError";
import { generateToken } from "../utils/generateToken";


export class UserController {
    constructor(private userService: IService) { }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { data } = req.body
            if (!data) throw ErrorResponse.badRequest('Data is not found');
            const { error, value } = loginVaildator.validate(data);
            console.log(value)
            if (error) {
                console.log(error.details)
                const validationErrors = error.details.map(err => ({
                    message: err.message.replace(/["\\]/g, ""),
                    field: err.path.join("."),
                }));
                console.log(validationErrors);
                throw ErrorResponse.validationError("Validation failed", validationErrors);
            }
            const result = await this.userService.login_service(value);
            const token = generateToken(result._id)
            return res
                .cookie('user', token)
                .status(200)
                .json({ data: result, success: true })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    async signup(req: Request, res: Response, next: NextFunction) {
        try {
            const { data } = req.body;
            const { error, value } = signupValidator.validate(data, { abortEarly: false });
            if (error) {
                console.log(error.details)
                const validationErrors = error.details.map(err => ({
                    message: err.message.replace(/["\\]/g, ""),
                    field: err.path.join("."),
                }));
                console.log(validationErrors);
                throw ErrorResponse.validationError("Validation failed", validationErrors);
            }
            const result = await this.userService.signup_service(value);
            const token = generateToken(result._id)
            return res
                .cookie('user', token)
                .status(201).json({ data: result, success: true });
        } catch (error) {
            next(error)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.cookies);
            res.clearCookie('user');
            // res.cookie('access_token', '', {
            //     maxAge:1,
            //     httpOnly:true,
            //     sameSite:'none', secure:true
            // });
            return res.status(200).json({ message: 'Logout successfully', success: true });
        } catch (error) {
            next(error)
        }
    }
}