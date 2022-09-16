import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { required_content_service } from './required_content.service';
import { required_content_interface } from './required_content.interface';
import { required_content_dto } from './required_content.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('required_content')
@ApiBearerAuth()
@Controller('required_content')
export class required_content_controller {
    constructor(private readonly _required_content_service: required_content_service) {}
}