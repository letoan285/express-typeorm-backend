import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {createConnection} from 'typeorm';
import helmet from 'helmet';

import userRoutes from './routes/user.routes';
import productRoutes from './routes/product.routes';
import categoryRoutes from './routes/category.routes';
import supplierRoutes from './routes/supplier.routes';

export class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        createConnection();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 8000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/api/products', productRoutes);
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/categories', categoryRoutes);
        this.app.use('/api/suppliers', supplierRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'));
        console.log(`Server run on port test server`, this.app.get('port'));
        
    }
}
const server = new Server();
server.start();