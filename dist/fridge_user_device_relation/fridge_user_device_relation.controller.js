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
exports.fridge_user_device_relation_controller = void 0;
const common_1 = require("@nestjs/common");
const fridge_user_device_relation_service_1 = require("./fridge_user_device_relation.service");
const swagger_1 = require("@nestjs/swagger");
let fridge_user_device_relation_controller = class fridge_user_device_relation_controller {
    constructor(_fridge_user_device_relation_service) {
        this._fridge_user_device_relation_service = _fridge_user_device_relation_service;
    }
};
fridge_user_device_relation_controller = __decorate([
    (0, swagger_1.ApiTags)('fridge_user_device_relation'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('fridge_user_device_relation'),
    __metadata("design:paramtypes", [fridge_user_device_relation_service_1.fridge_user_device_relation_service])
], fridge_user_device_relation_controller);
exports.fridge_user_device_relation_controller = fridge_user_device_relation_controller;
//# sourceMappingURL=fridge_user_device_relation.controller.js.map