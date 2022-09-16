"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fridge_user_device_relation_module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fridge_user_device_relation_controller_1 = require("./fridge_user_device_relation.controller");
const fridge_user_device_relation_service_1 = require("./fridge_user_device_relation.service");
const fridge_user_device_relation_entity_1 = require("./fridge_user_device_relation.entity");
let fridge_user_device_relation_module = class fridge_user_device_relation_module {
};
fridge_user_device_relation_module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fridge_user_device_relation_entity_1.fridge_user_device_relation])],
        controllers: [fridge_user_device_relation_controller_1.fridge_user_device_relation_controller],
        providers: [fridge_user_device_relation_service_1.fridge_user_device_relation_service],
        exports: [fridge_user_device_relation_service_1.fridge_user_device_relation_service],
    })
], fridge_user_device_relation_module);
exports.fridge_user_device_relation_module = fridge_user_device_relation_module;
//# sourceMappingURL=fridge_user_device_relation.module.js.map