import { Get, Controller } from '@nestjs/common';
import { device_service } from './device.service';
import { device_interface } from './device.interface';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('device')
@ApiBearerAuth()
@Controller('device')
export class device_controller {
  constructor(private readonly _device_service: device_service) {}

  @Get('devices')
  async get_all_devices(): Promise<device_interface[]> {
    return (await this._device_service.findAll()).map((device) => {
      return {
        device,
      };
    });
  }
}
