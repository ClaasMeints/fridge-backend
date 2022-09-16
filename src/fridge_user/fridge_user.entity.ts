import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { bcrypt } from 'bcrypt';

@Entity('fridge_user')
export class fridge_user {
  @PrimaryColumn()
  login: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
