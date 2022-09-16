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
exports.product_class_controller = void 0;
const common_1 = require("@nestjs/common");
const product_class_service_1 = require("./product_class.service");
const swagger_1 = require("@nestjs/swagger");
let product_class_controller = class product_class_controller {
    constructor(_product_class_service) {
        this._product_class_service = _product_class_service;
    }
};
product_class_controller = __decorate([
    (0, swagger_1.ApiTags)('product_class'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('product_class'),
    __metadata("design:paramtypes", [product_class_service_1.product_class_service])
], product_class_controller);
exports.product_class_controller = product_class_controller;
//# sourceMappingURL=product_class.controller.js.map