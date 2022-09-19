import { Get, Post, Body, Put, Delete, Controller } from '@nestjs/common';
import { unit_conversion_service } from './unit_conversion.service';
import { unit_conversion_interface } from './unit_conversion.interface';
import { unit_conversion_dto } from './unit_conversion.dto';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('unit_conversion')
@ApiBearerAuth()
@Controller('unit_conversion')
export class unit_conversion_controller {
  constructor(
    private readonly _unit_conversion_service: unit_conversion_service,
  ) {}

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Get all unit conversions' })
  @ApiResponse({ status: 200, description: 'Return all unit conversions.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async get_all_unit_conversions(): Promise<unit_conversion_interface[]> {
    return (await this._unit_conversion_service.findAll()).map(
      (unit_conversion) => {
        return {
          unit_conversion: unit_conversion,
        };
      },
    );
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Create a new unit conversion' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Post()
  async create_unit_conversion(
    @Body() unit_conversion: unit_conversion_dto,
  ): Promise<unit_conversion_interface> {
    return {
      unit_conversion: await this._unit_conversion_service.create(
        unit_conversion,
      ),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Update a unit conversion' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Put()
  async update_unit_conversion(
    @Body() unit_conversion: unit_conversion_dto,
  ): Promise<unit_conversion_interface> {
    return {
      unit_conversion: await this._unit_conversion_service.update(
        unit_conversion,
      ),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Delete a unit conversion' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Delete()
  async delete_unit_conversion(
    @Body() unit_conversion: unit_conversion_dto,
  ): Promise<void> {
    await this._unit_conversion_service.delete(unit_conversion);
  }
}
