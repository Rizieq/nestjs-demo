import { IsInt, IsPositive, IsNotEmpty, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';


export class FindOneDto {
  @IsNotEmpty({ message: 'id_employee must not be empty' })
  @ValidateIf(o => o.id_employee !== undefined)
  @IsInt({ message: 'id_employee must be an integer' })
  @IsPositive({ message: 'id_employee must be a positive number' })
  @Transform(({ value }) => parseInt(value, 10)) // Ensure value is an integer
  id_employee: number;
}
