import { AppDataSource } from '../../utils/data_source';
import { Expenses } from './Expenses_Model';

type ExpensesRequest = {
    id?: string;
    name?: string;
    description?: string;
    price?: number;
    fkUser?: string;
    payday?: Date;
    statusPayment?: boolean;
    dataCreated?: Date;
};

export class ExpensesService {
    private repository = AppDataSource.getRepository(Expenses);

    async create({ name, description, price, fkUser, payday }: ExpensesRequest): Promise<String | Error> {
        try {
            const expense = this.repository.create({
                name,
                description,
                price,
                fkUser,
                payday,
            });

            await this.repository.save(expense);

            return expense.id;
        } catch (err) {
            return new Error(err);
        }
    }

    async getByID({ id }: ExpensesRequest): Promise<Expenses | Error> {
        try {
            const expense = await this.repository.findOneBy({ id: id });

            if (!expense) {
                return new Error('Expense does not exist');
            }

            return expense;
        } catch (err) {
            return new Error(err);
        }
    }

    async getAll(): Promise<Expenses[] | Error> {
        try {
            const expense = await this.repository.find();

            if (!expense) {
                return new Error('There are no registered expenses');
            }

            return expense;
        } catch (err) {
            return new Error(err);
        }
    }

    async update({ id, statusPayment, description, name, payday, price }: ExpensesRequest): Promise<Expenses | Error> {
        try {
            const expense = await this.repository.findOneBy({ id: id });

            if (!expense) {
                return new Error('Expense does not exist');
            }

            expense.statusPayment = statusPayment ? statusPayment : expense.statusPayment;
            expense.description = description ? description : expense.description;
            expense.name = name ? name : expense.name;
            expense.payday = payday ? payday : expense.payday;
            expense.price = price ? price : expense.price;

            await this.repository.save(expense);

            return expense;
        } catch (err) {
            return new Error(err);
        }
    }

    async delete({ id }: ExpensesRequest): Promise<Boolean | Error> {
        try {
            const expense = await this.repository.findOneBy({ id: id });

            if (!expense) {
                return new Error('Expense does not exist');
            }

            await this.repository.remove(expense);

            return true;
        } catch (err) {
            return new Error(err);
        }
    }
}
