import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { unit_service } from './unit.service';
import { unit_interface } from './unit.interface';
import { unit_dto } from './unit.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('unit')
@ApiBearerAuth()
@Controller('unit')
export class unit_controller {
    constructor(private readonly _unit_service: unit_service) {}
}