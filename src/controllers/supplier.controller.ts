import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Supplier } from "../entity/Supplier";
import { Product } from '../entity/Product';


class SupplierController {

  constructor() {}
    getAll = async (req: Request, res: Response): Promise<Response> => {
      const suppliers = await getRepository(Supplier).find();
      return res.json(suppliers);
    };
    

    getOne = async (req: Request, res: Response): Promise<Response> => {
      const results = await getRepository(Supplier).findOne(req.params.id);
      return res.json(results);
    };

    getProductBySupplier = async (req: Request, res: Response): Promise<Response> => {
      const supplier = await getRepository(Supplier).findOne(req.params.id);
      const results = await getRepository(Product).find({
        where: {
            supplier: supplier?.id
        }
      });
      return res.json(results);
    };

    create = async (req: Request, res: Response): Promise<Response> => {
      const newSupplier = await getRepository(Supplier).create(req.body);
      const results = await getRepository(Supplier).save(newSupplier);
      return res.json(results);
    };

    update = async (req: Request,res: Response): Promise<Response> => {
      const supplier = await getRepository(Supplier).findOne(req.params.id);
      if (supplier) {
        getRepository(Supplier).merge(supplier, req.body);
        const results = await getRepository(Supplier).save(supplier);
        return res.json(results);
      }
    
      return res.json({msg: 'Supplier Not Found'});
    };

    delete = async (req: Request, res: Response): Promise<Response> => {
      const results = await getRepository(Supplier).delete(req.params.id);
      return res.json(results);
    };

    
}

const supplierController = new SupplierController;
export default supplierController;