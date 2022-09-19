import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { product_class } from '../product_class/product_class.entity';
import { unit_conversion } from '../unit_conversion/unit_conversion.entity';

@Entity('unit')
export class unit {
  @PrimaryGeneratedColumn()
  unit_id: number;

  @Column({ nullable: true })
  unit_name: string;

  @Column()
  unit_symbol: string;

  @OneToMany(() => product_class, (product_class) => product_class.unit_id)
  product_class: product_class[];

  @OneToMany(
    () => unit_conversion,
    (unit_conversion) => unit_conversion.unit_factor_id,
  )
  @OneToMany(
    () => unit_conversion,
    (unit_conversion) => unit_conversion.unit_result_id,
  )
  unit_conversion: unit_conversion[];
}
