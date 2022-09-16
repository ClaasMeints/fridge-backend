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
exports.shopping_list_controller = void 0;
const common_1 = require("@nestjs/common");
const shopping_list_service_1 = require("./shopping_list.service");
const swagger_1 = require("@nestjs/swagger");
let shopping_list_controller = class shopping_list_controller {
    constructor(_shopping_list_service) {
        this._shopping_list_service = _shopping_list_service;
    }
};
shopping_list_controller = __decorate([
    (0, swagger_1.ApiTags)('shopping_list'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('shopping_list'),
    __metadata("design:paramtypes", [shopping_list_service_1.shopping_list_service])
], shopping_list_controller);
exports.shopping_list_controller = shopping_list_controller;
//# sourceMappingURL=shopping_list.controller.js.map