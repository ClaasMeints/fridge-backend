import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
} from '@nestjs/common';
import { product_category_service } from './product_category.service';
import { product_category_interface } from './product_category.interface';
import { product_category_dto } from './product_category.dto';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('product_category')
@ApiBearerAuth()
@Controller('product_category')
export class product_category_controller {
  constructor(
    private readonly _product_category_service: product_category_service,
  ) {}

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Get all product categories' })
  @ApiResponse({ status: 200, description: 'Return all product categories.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async get_all_product_categories(): Promise<product_category_interface[]> {
    return (await this._product_category_service.findAll()).map(
      (product_category) => {
        return {
          product_category: product_category,
        };
      },
    );
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Get product category by id' })
  @ApiResponse({ status: 200, description: 'Return product category.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get(':category_id')
  async get_product_category_by_id(
    @Param() category_id_dto: { category_id: number },
  ): Promise<product_category_interface> {
    return {
      product_category: await this._product_category_service.findOne(
        category_id_dto.category_id,
      ),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Create a new product category' })
  @ApiResponse({ status: 200, description: 'Return product category.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create_product_category(
    @Body() product_category: product_category_dto,
  ): Promise<product_category_interface> {
    return {
      product_category: await this._product_category_service.create(
        product_category,
      ),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Update product category' })
  @ApiResponse({ status: 200, description: 'Return product category.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put(':category_id')
  async update_product_category(
    @Param() category_id_dto: { category_id: number },
    @Body() product_category: product_category_dto,
  ): Promise<product_category_interface> {
    return {
      product_category: await this._product_category_service.update(
        category_id_dto.category_id,
        product_category,
      ),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Delete product category' })
  @ApiResponse({ status: 200, description: 'Return product category.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':category_id')
  async delete_product_category(
    @Param() category_id_dto: { category_id: number },
  ): Promise<void> {
    await this._product_category_service.delete(category_id_dto.category_id);
  }
}
