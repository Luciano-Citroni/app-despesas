import { DataSource } from 'typeorm';
import 'reflect-metadata';
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
});
