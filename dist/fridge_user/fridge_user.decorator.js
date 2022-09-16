"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fridge_user_decorator = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
exports.fridge_user_decorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!!request.fridge_user) {
        return !!data ? request.fridge_user[data] : request.fridge_user;
    }
    const token = request.headers.authorization ? request.headers.authorization.split(' ') : null;
    if (token && token[1]) {
        const decoded = jwt.verify(token[1], config_1.SECRET);
        return !!data ? decoded[data] : decoded.fridge_user;
    }
});
//# sourceMappingURL=fridge_user.decorator.js.map