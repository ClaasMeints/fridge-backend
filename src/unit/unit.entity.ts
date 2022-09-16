import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('unit')
export class unit {
  @PrimaryGeneratedColumn()
  unit_id: number;

  @Column({ nullable: true })
  unit_name: string;

  @Column({ nullable: true })
  unit_symbol: string;
}
