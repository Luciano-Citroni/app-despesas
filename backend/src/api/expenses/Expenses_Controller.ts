import { Request, Response } from 'express';
import { ExpensesService } from './Expenses_Service';
import { parse } from 'date-fns';
import { UsersService } from '../users/Users_Service';

const service = new ExpensesService();

export class ExpensesController {
    async create(request: Request, response: Response) {
        try {
            const { name, description, price, fkUser, payday } = request.body;

            if (!name || !description || !price || !fkUser || !payday) {
                return response.status(400).send({ message: 'It is necessary to fill in all the data' });
            }

            const user_service = new UsersService();
            const user = await user_service.getByID({ id: fkUser });

            if (!user || user instanceof Error) {
                return response.status(404).send({ message: 'This user does not exist' });
            }

            const final__payday = parse(payday, 'dd/MM/yyyy', new Date());

            const result = await service.create({ name: name, description: description, price: price, fkUser: user.id, payday: final__payday });

            if (result instanceof Error) {
                return response.status(400).send({ message: result.message });
            }

            return response.send({ id: result });
        } catch (err) {
            console.log(err);
            return response.status(500);
        }
    }

    async getByID(request: Request, response: Response) {
        try {
            const { id } = request.body;

            if (!id) {
                return response.status(400).send({ message: 'It is necessary to fill in all the data' });
            }

            const result = await service.getByID({ id: id });

            if (result instanceof Error) {
                console.log(result.message);
                return response.status(500).send({ message: 'failed to complete request' });
            }

            if (!result) {
                return response.status(404).send({ message: 'This expenses does not exist' });
            }

            return response.send(result);
        } catch (err) {
            console.log(err);
            return response.status(500);
        }
    }

    async getAll(request: Request, response: Response) {
        try {
            const result = await service.getAll();

            if (result instanceof Error) {
                console.log(result.message);
                return response.status(500).send({ message: 'failed to complete request' });
            }

            if (!result) {
                return response.status(404).send({ message: 'no registered expenses' });
            }

            return response.send(result);
        } catch (err) {
            console.log(err);
            return response.status(500);
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { id, statusPayment, description, name, payday, price } = request.body;

            let final_payday = payday;

            if (!id) {
                return response.status(400).send({ message: 'It is necessary to fill in all the data' });
            }

            if (payday) {
                final_payday = parse(payday, 'dd/MM/yyyy', new Date());
            }

            const result = await service.update({
                id: id,
                statusPayment: statusPayment,
                description: description,
                name: name,
                payday: final_payday,
                price: price,
            });

            if (result instanceof Error) {
                return response.status(404).send({ message: result.message });
            }

            return response.send(result);
        } catch (err) {
            console.log(err);
            return response.status(500);
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { id } = request.body;

            if (!id) {
                return response.status(400).send({ message: 'It is necessary to fill in all the data' });
            }

            const result = await service.delete({ id: id });

            if (result instanceof Error) {
                return response.status(404).send({ message: 'This user does not exist' });
            }

            return response.status(200);
        } catch (err) {
            console.log(err);
            return response.status(500);
        }
    }
}
