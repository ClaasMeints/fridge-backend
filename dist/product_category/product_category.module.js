"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_category_module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_category_controller_1 = require("./product_category.controller");
const product_category_service_1 = require("./product_category.service");
const product_category_entity_1 = require("./product_category.entity");
let product_category_module = class product_category_module {
};
product_category_module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_category_entity_1.product_category])],
        controllers: [product_category_controller_1.product_category_controller],
        providers: [product_category_service_1.product_category_service],
        exports: [product_category_service_1.product_category_service],
    })
], product_category_module);
exports.product_category_module = product_category_module;
//# sourceMappingURL=product_category.module.js.map