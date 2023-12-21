import { Router } from 'express';
import { ExpensesController } from './Expenses_Controller';

const expensesRouter = Router();
const controller = new ExpensesController();

expensesRouter.post('/create', controller.create);

expensesRouter.get('/get', controller.getAll);
expensesRouter.get('/get/id', controller.getByID);

expensesRouter.put('/update', controller.update);

expensesRouter.delete('/delete', controller.delete);

export { expensesRouter };
