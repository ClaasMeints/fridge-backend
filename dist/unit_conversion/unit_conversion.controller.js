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
exports.unit_conversion_controller = void 0;
const common_1 = require("@nestjs/common");
const unit_conversion_service_1 = require("./unit_conversion.service");
const swagger_1 = require("@nestjs/swagger");
let unit_conversion_controller = class unit_conversion_controller {
    constructor(_unit_conversion_service) {
        this._unit_conversion_service = _unit_conversion_service;
    }
};
unit_conversion_controller = __decorate([
    (0, swagger_1.ApiTags)('unit_conversion'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('unit_conversion'),
    __metadata("design:paramtypes", [unit_conversion_service_1.unit_conversion_service])
], unit_conversion_controller);
exports.unit_conversion_controller = unit_conversion_controller;
//# sourceMappingURL=unit_conversion.controller.js.map