"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopping_list_decorator = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
exports.shopping_list_decorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!!request.shopping_list) {
        return !!data ? request.shopping_list[data] : request.shopping_list;
    }
    const token = request.headers.authorization ? request.headers.authorization.split(' ') : null;
    if (token && token[1]) {
        const decoded = jwt.verify(token[1], config_1.SECRET);
        return !!data ? decoded[data] : decoded.shopping_list;
    }
});
//# sourceMappingURL=shopping_list.decorator.js.map