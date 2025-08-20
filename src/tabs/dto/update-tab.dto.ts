import { IsString } from 'class-validator';

export class UpdateTabDto {
  @IsString()
  url?: string;

  @IsString()
  method?: string;
}
