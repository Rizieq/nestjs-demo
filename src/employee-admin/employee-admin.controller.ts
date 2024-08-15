import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeAdminService } from './employee-admin.service';
import { CreateEmployeeAdminDto } from './dto/create-employee-admin.dto';
import { UpdateEmployeeAdminDto } from './dto/update-employee-admin.dto';

@Controller('employee-admin')
export class EmployeeAdminController {
  constructor(private readonly employeeAdminService: EmployeeAdminService) {}

  @Post()
  create(@Body() createEmployeeAdminDto: CreateEmployeeAdminDto) {
    return this.employeeAdminService.create(createEmployeeAdminDto);
  }

  @Get()
  findAll() {
    return this.employeeAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeAdminDto: UpdateEmployeeAdminDto) {
    return this.employeeAdminService.update(+id, updateEmployeeAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeAdminService.remove(+id);
  }
}
