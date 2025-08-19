import { IsString } from 'class-validator';

export class CreateTabDto {
  @IsString()
  method: string;

  @IsString()
  url: string;
}
