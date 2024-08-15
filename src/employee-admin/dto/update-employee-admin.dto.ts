import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeAdminDto } from './create-employee-admin.dto';

export class UpdateEmployeeAdminDto extends PartialType(CreateEmployeeAdminDto) {}
