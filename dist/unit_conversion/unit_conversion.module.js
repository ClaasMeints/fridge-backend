"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unit_conversion_module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unit_conversion_controller_1 = require("./unit_conversion.controller");
const unit_conversion_service_1 = require("./unit_conversion.service");
const unit_conversion_entity_1 = require("./unit_conversion.entity");
let unit_conversion_module = class unit_conversion_module {
};
unit_conversion_module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([unit_conversion_entity_1.unit_conversion])],
        controllers: [unit_conversion_controller_1.unit_conversion_controller],
        providers: [unit_conversion_service_1.unit_conversion_service],
        exports: [unit_conversion_service_1.unit_conversion_service],
    })
], unit_conversion_module);
exports.unit_conversion_module = unit_conversion_module;
//# sourceMappingURL=unit_conversion.module.js.map