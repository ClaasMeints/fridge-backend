"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_category_decorator = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
exports.product_category_decorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!!request.product_category) {
        return !!data ? request.product_category[data] : request.product_category;
    }
    const token = request.headers.authorization ? request.headers.authorization.split(' ') : null;
    if (token && token[1]) {
        const decoded = jwt.verify(token[1], config_1.SECRET);
        return !!data ? decoded[data] : decoded.product_category;
    }
});
//# sourceMappingURL=product_category.decorator.js.map