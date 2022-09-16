"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.device_content_decorator = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
exports.device_content_decorator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!!request.device_content) {
        return !!data ? request.device_content[data] : request.device_content;
    }
    const token = request.headers.authorization ? request.headers.authorization.split(' ') : null;
    if (token && token[1]) {
        const decoded = jwt.verify(token[1], config_1.SECRET);
        return !!data ? decoded[data] : decoded.device_content;
    }
});
//# sourceMappingURL=device_content.decorator.js.map