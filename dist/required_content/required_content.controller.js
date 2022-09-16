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
exports.required_content_controller = void 0;
const common_1 = require("@nestjs/common");
const required_content_service_1 = require("./required_content.service");
const swagger_1 = require("@nestjs/swagger");
let required_content_controller = class required_content_controller {
    constructor(_required_content_service) {
        this._required_content_service = _required_content_service;
    }
};
required_content_controller = __decorate([
    (0, swagger_1.ApiTags)('required_content'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('required_content'),
    __metadata("design:paramtypes", [required_content_service_1.required_content_service])
], required_content_controller);
exports.required_content_controller = required_content_controller;
//# sourceMappingURL=required_content.controller.js.map