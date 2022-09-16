import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { product_category_service } from './product_category.service';
import { product_category_interface } from './product_category.interface';
import { product_category_dto } from './product_category.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('product_category')
@ApiBearerAuth()
@Controller('product_category')
export class product_category_controller {
    constructor(private readonly _product_category_service: product_category_service) {}
}