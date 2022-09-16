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
exports.device_controller = void 0;
const common_1 = require("@nestjs/common");
const device_service_1 = require("./device.service");
const swagger_1 = require("@nestjs/swagger");
let device_controller = class device_controller {
    constructor(_device_service) {
        this._device_service = _device_service;
    }
};
device_controller = __decorate([
    (0, swagger_1.ApiTags)('device'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('device'),
    __metadata("design:paramtypes", [device_service_1.device_service])
], device_controller);
exports.device_controller = device_controller;
//# sourceMappingURL=device.controller.js.map