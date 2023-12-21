import { DataSource } from 'typeorm';
import 'reflect-metadata';
import 'dotenv/config';
import { Users } from '../api/users/Users_Model';
import { Expenses } from '../api/expenses/Expenses_Model';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [Users, Expenses],
    migrations: [],
    subscribers: [],
});
