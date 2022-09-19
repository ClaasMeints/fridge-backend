import { IsNotEmpty } from 'class-validator';

export class create_device_dto {
  device_name: string;
}

export class update_device_dto {
  @IsNotEmpty()
  device_name: string;
}
