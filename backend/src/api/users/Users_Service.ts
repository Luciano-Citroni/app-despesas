import { AppDataSource } from '../../utils/data_source';
import { Users } from './Users_Model';

type UsersRequest = {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
};

export class UsersService {
    private repository = AppDataSource.getRepository(Users);

    async create({ name, email, password }: UsersRequest): Promise<String | Error> {
        try {
            if (await this.repository.findOneBy({ email: email })) {
                return new Error('Email already registered');
            }

            const user = this.repository.create({
                name: name,
                email: email,
                password: password,
            });

            await this.repository.save(user);

            return user.id;
        } catch (err) {
            return new Error(err);
        }
    }

    async getByID({ id }: UsersRequest): Promise<Users | Error> {
        try {
            return await this.repository.findOneBy({ id: id });
        } catch (err) {
            return new Error(err);
        }
    }

    async getByEmail({ email }: UsersRequest): Promise<Users | Error> {
        try {
            return await this.repository.findOneBy({ email: email });
        } catch (err) {
            return new Error(err);
        }
    }

    async update({ id, email, password }: UsersRequest): Promise<Users | Error> {
        try {
            const user = await this.repository.findOneBy({ id: id });

            if (!user) {
                return new Error('User does not exist');
            }

            user.email = email ? email : user.email;
            user.password = password ? password : user.password;

            await this.repository.save(user);

            return user;
        } catch (err) {
            return new Error(err);
        }
    }

    async delete({ id }: UsersRequest): Promise<Boolean | Error> {
        try {
            const user = await this.repository.findOneBy({ id: id });

            if (!user) {
                return new Error('User does not exist');
            }

            await this.repository.remove(user);

            return true;
        } catch (err) {
            return new Error(err);
        }
    }
}
