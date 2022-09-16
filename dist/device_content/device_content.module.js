"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.device_content_module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const device_content_controller_1 = require("./device_content.controller");
const device_content_service_1 = require("./device_content.service");
const device_content_entity_1 = require("./device_content.entity");
let device_content_module = class device_content_module {
};
device_content_module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([device_content_entity_1.device_content])],
        controllers: [device_content_controller_1.device_content_controller],
        providers: [device_content_service_1.device_content_service],
        exports: [device_content_service_1.device_content_service],
    })
], device_content_module);
exports.device_content_module = device_content_module;
//# sourceMappingURL=device_content.module.js.map