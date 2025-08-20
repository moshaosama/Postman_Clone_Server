import { IsString } from 'class-validator';
import { history } from '../../history/entities/history.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  title: string;

  @OneToMany(() => history, (history) => history.collection_id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  history: history[];
}
