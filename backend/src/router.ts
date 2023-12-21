import { Router } from 'express';
import { expensesRouter } from './api/expenses/Expenses_Router';
import { userRouter } from './api/users/Users_Router';

const router = Router();

router.use('/expenses', expensesRouter);

router.use('/users', userRouter);

export { router };
