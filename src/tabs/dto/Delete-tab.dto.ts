import { IsString } from 'class-validator';

export class CreateTabDto {
  @IsString()
  id: number;
}
