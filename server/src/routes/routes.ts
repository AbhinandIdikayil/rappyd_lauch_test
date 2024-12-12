import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { UserRepository } from '../repository/UserRepository';
import { UserService } from '../service/UserService';

export const userRouter = Router()

const userRepository= new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService);


userRouter.route('/login').post(userController.login.bind(userController));
userRouter.route('/signup').post(userController.signup.bind(userController));