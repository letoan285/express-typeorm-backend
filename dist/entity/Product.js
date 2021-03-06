"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var Category_1 = require("./Category");
var Supplier_1 = require("./Supplier");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "sku", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Product.prototype, "slug", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Product.prototype, "short_description", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Product.prototype, "image", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Product.prototype, "list_price", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", Number)
    ], Product.prototype, "sell_price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Product.prototype, "status", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Category_1.Category; }, function (category) { return category.products; }),
        __metadata("design:type", Category_1.Category)
    ], Product.prototype, "category", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Supplier_1.Supplier; }, function (supplier) { return supplier.products; }),
        __metadata("design:type", Supplier_1.Supplier)
    ], Product.prototype, "supplier", void 0);
    Product = __decorate([
        typeorm_1.Entity("products")
    ], Product);
    return Product;
}());
exports.Product = Product;
