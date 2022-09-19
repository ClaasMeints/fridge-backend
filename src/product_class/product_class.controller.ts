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
import { product_class_service } from './product_class.service';
import { product_class_interface } from './product_class.interface';
import { product_class_dto } from './product_class.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('product_class')
@ApiBearerAuth()
@Controller('product_class')
export class product_class_controller {
  constructor(private readonly _product_class_service: product_class_service) {}

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Get all product classes' })
  @ApiResponse({ status: 200, description: 'Return all product classes.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async get_all_product_classes(): Promise<product_class_interface[]> {
    return (await this._product_class_service.findAll()).map(
      (product_class) => {
        return {
          product_class: product_class,
        };
      },
    );
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Get product class by id' })
  @ApiResponse({ status: 200, description: 'Return product class.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get(':class_id')
  async get_product_class_by_id(
    @Param() class_id_dto: { class_id: number },
  ): Promise<product_class_interface> {
    return {
      product_class: await this._product_class_service.findOne(
        class_id_dto.class_id,
      ),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Create a new product class' })
  @ApiResponse({ status: 200, description: 'Return product class.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create_product_class(
    @Body() product_class: product_class_dto,
  ): Promise<product_class_interface> {
    return {
      product_class: await this._product_class_service.create(product_class),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Update a product class' })
  @ApiResponse({ status: 200, description: 'Return product class.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put(':class_id')
  async update_product_class(
    @Param() class_id_dto: { class_id: number },
    @Body() product_class: product_class_dto,
  ): Promise<product_class_interface> {
    return {
      product_class: await this._product_class_service.update(
        class_id_dto.class_id,
        product_class,
      ),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Delete a product class' })
  @ApiResponse({ status: 200, description: 'Return product class.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':class_id')
  async delete_product_class(
    @Param() class_id_dto: { class_id: number },
  ): Promise<void> {
    this._product_class_service.delete(class_id_dto.class_id);
  }
}
