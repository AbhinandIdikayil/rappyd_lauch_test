import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../utils/CustomError"

export const errorMiddleware = (err: Error, _:Request, res: Response, __: NextFunction): Response => {
    if (err instanceof ErrorResponse) {
        return res.status(err.status).json({ message: err.message, success: false, errors:err.errors });
    } else {
        return res.status(500).json({ message: 'Something went wrong', success: false });
    }
}