"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unit_decorator = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
exports.unit_decorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!!request.unit) {
        return !!data ? request.unit[data] : request.unit;
    }
    const token = request.headers.authorization ? request.headers.authorization.split(' ') : null;
    if (token && token[1]) {
        const decoded = jwt.verify(token[1], config_1.SECRET);
        return !!data ? decoded[data] : decoded.unit;
    }
});
//# sourceMappingURL=unit.decorator.js.map