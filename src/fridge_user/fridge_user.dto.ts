import { IsNotEmpty } from 'class-validator';

export class create_fridge_user_dto {
  @IsNotEmpty()
  login: string;
  @IsNotEmpty()
  password: string;
}

export class update_fridge_user_dto {
  @IsNotEmpty()
  password: string;
}
