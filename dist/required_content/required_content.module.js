"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.required_content_module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const required_content_controller_1 = require("./required_content.controller");
const required_content_service_1 = require("./required_content.service");
const required_content_entity_1 = require("./required_content.entity");
let required_content_module = class required_content_module {
};
required_content_module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([required_content_entity_1.required_content])],
        controllers: [required_content_controller_1.required_content_controller],
        providers: [required_content_service_1.required_content_service],
        exports: [required_content_service_1.required_content_service],
    })
], required_content_module);
exports.required_content_module = required_content_module;
//# sourceMappingURL=required_content.module.js.map