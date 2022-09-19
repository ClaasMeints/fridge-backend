import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
  UsePipes,
} from '@nestjs/common';
import { Request } from 'express';
import { product_service } from './product.service';
import { product_interface } from './product.interface';
import { product_ean_dto } from './product.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@ApiBearerAuth()
@Controller('product')
export class product_controller {
  constructor(private readonly _product_service: product_service) {}
}
