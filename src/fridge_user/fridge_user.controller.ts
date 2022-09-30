import { Post, Body, Put, Delete, Controller, Param } from '@nestjs/common';
import { fridge_user_service } from './fridge_user.service';
import { fridge_user_interface } from './fridge_user.interface';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  create_fridge_user_dto,
  update_fridge_user_dto,
} from './fridge_user.dto';

@ApiTags('fridge_user')
@ApiBearerAuth()
@Controller('fridge_user')
export class fridge_user_controller {
  constructor(private readonly _fridge_user_service: fridge_user_service) {}

  // OPTIONAL: Add a route to get all fridge_users for admin

  @ApiOperation({
    summary: 'Create a new fridge_user',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Post()
  async create_fridge_user(
    @Body() fridge_user: create_fridge_user_dto,
  ): Promise<fridge_user_interface> {
    return {
      fridge_user: await this._fridge_user_service.create(fridge_user),
    };
  }

  @ApiOperation({
    summary: 'Update a fridge_user',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Put(':login')
  async update_fridge_user(
    @Param() login_dto: { login: string },
    @Body() fridge_user: update_fridge_user_dto,
  ): Promise<fridge_user_interface> {
    return {
      fridge_user: await this._fridge_user_service.update(
        login_dto.login,
        fridge_user,
      ),
    };
  }

  @ApiOperation({
    summary: 'Delete a fridge_user',
  })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Delete(':login')
  async delete_fridge_user(
    @Param() login_dto: { login: string },
  ): Promise<void> {
    await this._fridge_user_service.delete(login_dto.login);
  }
}
