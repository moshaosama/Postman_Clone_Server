import { IsNumber, IsString } from 'class-validator';

export class CreateCollectionDto {
  @IsString()
  title: string;
}
