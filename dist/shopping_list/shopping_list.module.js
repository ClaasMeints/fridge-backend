"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopping_list_module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shopping_list_controller_1 = require("./shopping_list.controller");
const shopping_list_service_1 = require("./shopping_list.service");
const shopping_list_entity_1 = require("./shopping_list.entity");
let shopping_list_module = class shopping_list_module {
};
shopping_list_module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shopping_list_entity_1.shopping_list])],
        controllers: [shopping_list_controller_1.shopping_list_controller],
        providers: [shopping_list_service_1.shopping_list_service],
        exports: [shopping_list_service_1.shopping_list_service],
    })
], shopping_list_module);
exports.shopping_list_module = shopping_list_module;
//# sourceMappingURL=shopping_list.module.js.map