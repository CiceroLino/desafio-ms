import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
