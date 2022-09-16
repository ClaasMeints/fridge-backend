import { IsBase64 } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_category')
export class product_category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ nullable: true })
  category_name: string;

  @Column({ type: 'bytea', nullable: true })
  @IsBase64()
  category_icon: Buffer;
}
