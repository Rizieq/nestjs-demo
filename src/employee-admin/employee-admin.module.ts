import { Module } from '@nestjs/common';
import { EmployeeAdminService } from './employee-admin.service';
import { EmployeeAdminController } from './employee-admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../admin/entities/admin.entity';
import { Employee } from '../employee/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, Employee])],
  controllers: [EmployeeAdminController],
  providers: [EmployeeAdminService],
})
export class EmployeeAdminModule {}
