import * as express from 'express';
import { router } from '../router';
import 'dotenv/config';
import * as cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());
server.use('/api', router);

export { server };
