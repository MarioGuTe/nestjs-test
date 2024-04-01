import { IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  breed: string;
}
