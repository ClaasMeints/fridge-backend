import {
  Get,
  Controller,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { device_service } from './device.service';
import { device_interface } from './device.interface';
import { create_device_dto, update_device_dto } from './device.dto';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('device')
@ApiBearerAuth()
@Controller('device')
export class device_controller {
  constructor(private readonly _device_service: device_service) {}

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Get all devices' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Get()
  async get_all_devices(): Promise<device_interface[]> {
    return (await this._device_service.findAll()).map((device) => {
      return {
        device,
      };
    });
  }

  // OPTIONAL: authorize only admin
  @ApiOperation({ summary: 'Get a specific device' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Get(':device_id')
  async get_device_by_id(
    @Param() device_id_dto: { device_id: number },
  ): Promise<device_interface> {
    return {
      device: await this._device_service.findOne(device_id_dto.device_id),
    };
  }

  // OPTIONAL: Add a route to get all devices of a specific fridge_user

  @ApiOperation({ summary: 'Create a new device' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Post(':login')
  async create_device(
    @Param() login_dto: { login: string },
    @Body() device: create_device_dto,
  ): Promise<device_interface> {
    return {
      device: await this._device_service.create(login_dto.login, device),
    };
  }

  @ApiOperation({ summary: 'Update a specific device' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Put(':device_id')
  async update_device(
    @Param() device_id_dto: { device_id: number },
    @Body() device: update_device_dto,
  ): Promise<device_interface> {
    return {
      device: await this._device_service.update(
        device_id_dto.device_id,
        device,
      ),
    };
  }

  @ApiOperation({ summary: 'Delete a specific device' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Delete(':device_id')
  async delete_device(
    @Param() device_id_dto: { device_id: number },
  ): Promise<void> {
    await this._device_service.delete(device_id_dto.device_id);
  }
}
