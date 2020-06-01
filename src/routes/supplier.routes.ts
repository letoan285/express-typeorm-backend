import { Router } from "express";

import supplierController from '../controllers/supplier.controller';
class SupplierRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    public config() {
        this.router.get('/', supplierController.getAll);
        this.router.get('/:id', supplierController.getOne);
        this.router.get('/:id/products', supplierController.getProductBySupplier);
        this.router.post('/', supplierController.create);
        this.router.put('/:id', supplierController.update);
        this.router.delete('/:id', supplierController.delete);
    }
}

export default new SupplierRoutes().router;