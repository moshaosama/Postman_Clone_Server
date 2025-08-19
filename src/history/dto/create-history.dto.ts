import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { collection } from 'src/collections/entities/collection.entity';

export class CreateHistoryDto {
  @IsString()
  method: string;

  @IsString()
  url: string;

  collection_id: collection | number;
}
