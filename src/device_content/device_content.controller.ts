import { Get, Post, Body, Put, Controller, Param } from '@nestjs/common';
import { device_content_service } from './device_content.service';
import { device_content_interface } from './device_content.interface';
import { device_content_dto } from './device_content.dto';
import { fridge_user_decorator } from '../fridge_user/fridge_user.decorator';
import { product_dto } from '../product/product.dto';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('device_content')
@ApiBearerAuth()
@Controller('device_content')
export class device_content_controller {
  constructor(
    private readonly _device_content_service: device_content_service,
  ) {}

  @ApiOperation({
    summary: 'Get all device contents from all devices of a specific user',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Get(':login')
  async get_all_device_contents(
    @Param() login_dto: { login: string },
  ): Promise<device_content_dto[]> {
    const result = await this._device_content_service.findAll(login_dto.login);
    console.log('result', result);
    return result || [];
  }

  // OPTIONAL: add an api to fetch all contents of a specific category

  @ApiOperation({
    summary:
      'Create a new Product or add an existing Product to a specific device',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Post(':device_id') //@Put would also make sense here - but it is impossible to know whether the product has already been in the device or not without user feedback or intelligent guess (ML-Model or time based guess)
  async create_device_content(
    @Param() device_id_dto: { device_id: number },
    @Body() device_content_dto: product_dto,
  ): Promise<device_content_interface> {
    return {
      device_content: await this._device_content_service.create_device_content(
        device_id_dto.device_id,
        device_content_dto,
      ),
    };
  }

  @ApiOperation({
    summary: 'Take a product out of a specific device',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Put(':device_id')
  async take_product_out_of_device(
    @Param() device_id_dto: { device_id: number },
    @Body() device_content_dto: product_dto,
  ): Promise<device_content_interface> {
    return await this._device_content_service.take_product_out_of_device(
      device_id_dto.device_id,
      device_content_dto,
    );
  }
}
