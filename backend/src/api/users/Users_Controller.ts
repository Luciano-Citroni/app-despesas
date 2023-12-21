import { Request, Response } from 'express';
import { UsersService } from './Users_Service';
import { EncryptPass } from '../../utils/bcrypt';

const service = new UsersService();

export class UsersController {
    async create(request: Request, response: Response) {
        try {
            const { name, email, password } = request.body;

            if (!name || !email || !password) {
                return response.status(400).send({ message: 'It is necessary to fill in all the data' });
            }

            const passHash = await EncryptPass(password);

            if (passHash instanceof Error) {
                return response.status(500).send({ message: 'Unable to encrypt password' });
            }

            const result = await service.create({ name: name, email: email, password: passHash as string });

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
                return response.status(404).send({ message: 'This user does not exist' });
            }

            return response.send(result);
        } catch (err) {
            console.log(err);
            return response.status(500);
        }
    }

    async getByEmail(request: Request, response: Response) {
        try {
            const { email } = request.body;

            if (!email) {
                return response.status(400).send({ message: 'It is necessary to fill in all the data' });
            }

            const result = await service.getByEmail({ email: email });

            if (result instanceof Error) {
                console.log(result.message);
                return response.status(500).send({ message: 'failed to complete request' });
            }

            if (!result) {
                return response.status(404).send({ message: 'This user does not exist' });
            }

            return response.send(result);
        } catch (err) {
            console.log(err);
            return response.status(500);
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { id, email, password } = request.body;

            let final_password = password;

            if (!id) {
                return response.status(400).send({ message: 'It is necessary to fill in all the data' });
            }

            if (email) {
                const user = await service.getByEmail({ email: email });

                if (user || user instanceof Error) {
                    return response.status(400).send({ message: 'Email already registered' });
                }
            }

            if (password) {
                const passHash = await EncryptPass(password);
                if (passHash instanceof Error) {
                    return new Error('Não foi possível criptografar a senha');
                }

                final_password = passHash;
            }

            const result = await service.update({ id: id, email: email, password: final_password });

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
