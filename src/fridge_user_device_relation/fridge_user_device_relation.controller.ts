import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { fridge_user_device_relation_service } from './fridge_user_device_relation.service';
import { fridge_user_device_relation_interface } from './fridge_user_device_relation.interface';
import { fridge_user_device_relation_dto } from './fridge_user_device_relation.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('fridge_user_device_relation')
@ApiBearerAuth()
@Controller('fridge_user_device_relation')
export class fridge_user_device_relation_controller {
    constructor(private readonly _fridge_user_device_relation_service: fridge_user_device_relation_service) {}
}