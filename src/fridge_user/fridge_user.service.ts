import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  create_fridge_user_dto,
  update_fridge_user_dto,
} from './fridge_user.dto';
import { fridge_user } from './fridge_user.entity';

@Injectable()
export class fridge_user_service {
  constructor(
    @InjectRepository(fridge_user)
    private fridge_user_repository: Repository<fridge_user>,
  ) {}

  async findeOne(login: string): Promise<fridge_user> {
    return await this.fridge_user_repository.findOne({
      where: { login: login },
    });
  }

  async create(fridge_user: create_fridge_user_dto): Promise<fridge_user> {
    return await this.fridge_user_repository.save(
      this.fridge_user_repository.create(fridge_user),
    );
  }

  async update(
    login: string,
    fridge_user: update_fridge_user_dto,
  ): Promise<fridge_user> {
    await this.fridge_user_repository.update(login, fridge_user);
    return await this.fridge_user_repository.findOne({
      where: { login: login },
    });
  }

  async delete(login: string): Promise<void> {
    await this.fridge_user_repository.delete(login); // TODO: Cascade delete the fridge_user_device_relations
  }
}
