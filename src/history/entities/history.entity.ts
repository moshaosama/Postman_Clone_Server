import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class history {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  method: string;

  @Column()
  url: string;
}
