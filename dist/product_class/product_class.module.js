"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_class_module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_class_controller_1 = require("./product_class.controller");
const product_class_service_1 = require("./product_class.service");
const product_class_entity_1 = require("./product_class.entity");
let product_class_module = class product_class_module {
};
product_class_module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_class_entity_1.product_class])],
        controllers: [product_class_controller_1.product_class_controller],
        providers: [product_class_service_1.product_class_service],
        exports: [product_class_service_1.product_class_service],
    })
], product_class_module);
exports.product_class_module = product_class_module;
//# sourceMappingURL=product_class.module.js.map