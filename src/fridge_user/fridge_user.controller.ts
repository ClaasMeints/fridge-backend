import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { fridge_user_service } from './fridge_user.service';
import { fridge_user_interface } from './fridge_user.interface';
import { fridge_user_dto } from './fridge_user.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('fridge_user')
@ApiBearerAuth()
@Controller('fridge_user')
export class fridge_user_controller {
    constructor(private readonly _fridge_user_service: fridge_user_service) {}
}