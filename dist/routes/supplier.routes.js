"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var supplier_controller_1 = __importDefault(require("../controllers/supplier.controller"));
var SupplierRoutes = /** @class */ (function () {
    function SupplierRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    SupplierRoutes.prototype.config = function () {
        this.router.get('/', supplier_controller_1.default.getAll);
        this.router.get('/:id', supplier_controller_1.default.getOne);
        this.router.get('/:id/products', supplier_controller_1.default.getProductBySupplier);
        this.router.post('/', supplier_controller_1.default.create);
        this.router.put('/:id', supplier_controller_1.default.update);
        this.router.delete('/:id', supplier_controller_1.default.delete);
    };
    return SupplierRoutes;
}());
exports.default = new SupplierRoutes().router;
