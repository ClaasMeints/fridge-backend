import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { product_class_service } from './product_class.service';
import { product_class_interface } from './product_class.interface';
import { product_class_dto } from './product_class.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('product_class')
@ApiBearerAuth()
@Controller('product_class')
export class product_class_controller {
    constructor(private readonly _product_class_service: product_class_service) {}
}