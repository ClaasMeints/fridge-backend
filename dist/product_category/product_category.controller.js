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
exports.product_category_controller = void 0;
const common_1 = require("@nestjs/common");
const product_category_service_1 = require("./product_category.service");
const swagger_1 = require("@nestjs/swagger");
let product_category_controller = class product_category_controller {
    constructor(_product_category_service) {
        this._product_category_service = _product_category_service;
    }
};
product_category_controller = __decorate([
    (0, swagger_1.ApiTags)('product_category'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('product_category'),
    __metadata("design:paramtypes", [product_category_service_1.product_category_service])
], product_category_controller);
exports.product_category_controller = product_category_controller;
//# sourceMappingURL=product_category.controller.js.map