import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { shopping_list_service } from './shopping_list.service';
import { shopping_list_interface } from './shopping_list.interface';
import { shopping_list_dto } from './shopping_list.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('shopping_list')
@ApiBearerAuth()
@Controller('shopping_list')
export class shopping_list_controller {
    constructor(private readonly _shopping_list_service: shopping_list_service) {}
}