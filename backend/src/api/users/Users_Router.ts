import { Router } from 'express';
import { UsersController } from './Users_Controller';

const controller = new UsersController();
const userRouter = Router();

userRouter.post('/create', controller.create);

userRouter.get('/get/email/:email', controller.getByEmail);
userRouter.get('/get/id/:id', controller.getByID);

userRouter.put('/update', controller.update);

userRouter.delete('/delete', controller.delete);

export { userRouter };
