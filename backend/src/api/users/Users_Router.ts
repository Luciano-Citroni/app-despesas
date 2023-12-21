import { Router } from 'express';
import { UsersController } from './Users_Controller';

const controller = new UsersController();
const userRouter = Router();

userRouter.post('/create', controller.create);

userRouter.get('/get/email', controller.getByEmail);
userRouter.get('/get/id', controller.getByID);

userRouter.put('/update', controller.update);

userRouter.put('/delete', controller.delete);

export { userRouter };
