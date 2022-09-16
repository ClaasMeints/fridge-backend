"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_class_decorator = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
exports.product_class_decorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!!request.product_class) {
        return !!data ? request.product_class[data] : request.product_class;
    }
    const token = request.headers.authorization ? request.headers.authorization.split(' ') : null;
    if (token && token[1]) {
        const decoded = jwt.verify(token[1], config_1.SECRET);
        return !!data ? decoded[data] : decoded.product_class;
    }
});
//# sourceMappingURL=product_class.decorator.js.map