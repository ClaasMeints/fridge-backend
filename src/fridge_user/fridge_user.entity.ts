import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { fridge_user_device_relation } from '../fridge_user_device_relation/fridge_user_device_relation.entity';
import { shopping_list } from '../shopping_list/shopping_list.entity';

@Entity('fridge_user')
export class fridge_user {
  @PrimaryColumn()
  login: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToMany(
    () => fridge_user_device_relation,
    (fridge_user_device_relation) => fridge_user_device_relation.login,
  )
  fridge_user_device_relation: fridge_user_device_relation[];

  @OneToMany(() => shopping_list, (shopping_list) => shopping_list.login)
  shopping_list: shopping_list[];
}
