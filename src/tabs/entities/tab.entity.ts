import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';




@Entity()
export class tabs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  method: string;

  @Column()
  url: string;
}
