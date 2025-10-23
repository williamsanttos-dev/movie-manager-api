import { IsString, IsNumber } from 'class-validator';
import { IsAllowedValue } from '../validators/is-allowed-value.decorator';

export class CreateMovieDto {
  @IsString()
  url: string;

  @IsString()
  title: string;

  @IsString()
  genre: string;

  @IsNumber()
  @IsAllowedValue({ message: 'The age group must be 0, 10, 12, 14, 16 or 18.' })
  ageGroup: number;

  @IsString()
  duration: string;

  @IsNumber()
  rating: number;

  @IsNumber()
  year: number;

  @IsString()
  description: string;
}
