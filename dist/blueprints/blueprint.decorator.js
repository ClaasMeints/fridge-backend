"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._decorator = exports. = void 0;
from;
'@nestjs/common';
from;
'../config';
const jwt = require("jsonwebtoken");
exports._decorator = createParamDecorator((data, ctx) => {
    {
        const request = ctx.switchToHttp().getRequest();
        if (!!request.) {
            0;
        }
    }
});
!!data ? request. : ;
{
    0;
}
[data];
request.;
{
    0;
}
;
const token = request.headers.authorization ? request.headers.authorization.split(' ') : null;
if (token && token[1]) {
    {
        const decoded = jwt.verify(token[1], SECRET);
        return !!data ? decoded[data] : decoded.;
        {
            0;
        }
        ;
    }
}
;
//# sourceMappingURL=blueprint.decorator.js.map