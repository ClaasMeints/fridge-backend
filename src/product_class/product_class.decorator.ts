import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { SECRET } from '../config';
import * as jwt from 'jsonwebtoken';

export const product_class_decorator = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    
    // if route is protected, there is a user set in auth.middleware
    if (!!request.product_class) {
        return !!data ? request.product_class[data] : request.product_class;
    }

    // in case a route is not protected, we still want to get the optional auth user from jwt
    const token = request.headers.authorization ? (request.headers.authorization as string).split(' ') : null;
    if (token && token[1]) {
        const decoded: any = jwt.verify(token[1], SECRET);
        return !!data ? decoded[data] : decoded.product_class;
    }
});