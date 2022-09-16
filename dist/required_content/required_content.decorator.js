"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.required_content_decorator = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
exports.required_content_decorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!!request.required_content) {
        return !!data ? request.required_content[data] : request.required_content;
    }
    const token = request.headers.authorization ? request.headers.authorization.split(' ') : null;
    if (token && token[1]) {
        const decoded = jwt.verify(token[1], config_1.SECRET);
        return !!data ? decoded[data] : decoded.required_content;
    }
});
//# sourceMappingURL=required_content.decorator.js.map