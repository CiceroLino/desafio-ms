import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsPositive,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsBoolean()
  isAvailable: boolean;

  @IsNumber()
  @IsPositive()
  price: number;
}
