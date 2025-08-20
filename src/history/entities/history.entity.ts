import { collection } from '../../collections/entities/collection.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class history {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  method: string;

  @Column()
  url: string;

  @ManyToOne(() => collection, (collection) => collection.history)
  @JoinColumn({ name: 'collection_id' })
  collection_id: collection;
}
