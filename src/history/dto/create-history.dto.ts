import { IsString } from 'class-validator';
import { collection } from '../../collections/entities/collection.entity';

export class CreateHistoryDto {
  @IsString()
  method: string;

  @IsString()
  url: string;

  collection_id: collection | number;
}
