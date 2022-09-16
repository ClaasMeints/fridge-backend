import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { device_service } from './device.service';
import { device_interface } from './device.interface';
import { device_dto } from './device.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('device')
@ApiBearerAuth()
@Controller('device')
export class device_controller {
    constructor(private readonly _device_service: device_service) {}
}