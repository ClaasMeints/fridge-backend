import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
} from '@nestjs/common';
import { unit_service } from './unit.service';
import { unit_interface } from './unit.interface';
import { unit_dto } from './unit.dto';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('unit')
@ApiBearerAuth()
@Controller('unit')
export class unit_controller {
  constructor(private readonly _unit_service: unit_service) {}

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Get all units' })
  @ApiResponse({ status: 200, description: 'Return all units.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async get_all_units(): Promise<unit_interface[]> {
    return (await this._unit_service.findAll()).map((unit) => {
      return {
        unit: unit,
      };
    });
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Get unit by id' })
  @ApiResponse({ status: 200, description: 'Return unit.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get(':unit_id')
  async get_unit_by_id(
    @Param() unit_id_dto: { unit_id: number },
  ): Promise<unit_interface> {
    return {
      unit: await this._unit_service.findOne(unit_id_dto.unit_id),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Create a new unit' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Post()
  async create_unit(@Body() unit: unit_dto): Promise<unit_interface> {
    return {
      unit: await this._unit_service.create(unit),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Update a unit' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put(':unit_id')
  async update_unit(
    @Param() unit_id_dto: { unit_id: number },
    @Body() unit: unit_dto,
  ): Promise<unit_interface> {
    return {
      unit: await this._unit_service.update(unit_id_dto.unit_id, unit),
    };
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Delete a unit' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':unit_id')
  async delete_unit(@Param() unit_id_dto: { unit_id: number }): Promise<void> {
    await this._unit_service.delete(unit_id_dto.unit_id);
  }
}
