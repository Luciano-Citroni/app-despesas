import { server } from './server/server';
import { AppDataSource } from './utils/data_source';

AppDataSource.initialize().then(() => {
    server.listen(process.env.APP_PORT || 3333, async () => {
        console.log(`the backend is running on the port: ${process.env.APP_PORT || 3333} `);
    });
});
