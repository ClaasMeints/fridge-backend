import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { device_content_service } from './device_content.service';
import { device_content_interface } from './device_content.interface';
import { device_content_dto } from './device_content.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('device_content')
@ApiBearerAuth()
@Controller('device_content')
export class device_content_controller {
    constructor(private readonly _device_content_service: device_content_service) {}
}