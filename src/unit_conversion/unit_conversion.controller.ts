import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { unit_conversion_service } from './unit_conversion.service';
import { unit_conversion_interface } from './unit_conversion.interface';
import { unit_conversion_dto } from './unit_conversion.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('unit_conversion')
@ApiBearerAuth()
@Controller('unit_conversion')
export class unit_conversion_controller {
    constructor(private readonly _unit_conversion_service: unit_conversion_service) {}
}