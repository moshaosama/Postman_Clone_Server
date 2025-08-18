import { IsNumber, IsString } from 'class-validator';

export class CreateCollectionDto {
  @IsString()
  title: string;

  @IsNumber()
  history_id: number;
}
