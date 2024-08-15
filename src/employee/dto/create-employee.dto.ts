import { IsInt, IsPositive, IsNotEmpty, ValidateIf } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateEmployeeDto {
    @IsNotEmpty({ message: 'data must not be empty' })
    personal_information_id: number;
    general_information_id: number;
    job_information_id: number;
    company_id: number;
    password: string;
}
