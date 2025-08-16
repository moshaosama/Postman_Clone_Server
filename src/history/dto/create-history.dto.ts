import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHistoryDto {
  @IsString()
  method: string;

  @IsString()
  url: string;
}
