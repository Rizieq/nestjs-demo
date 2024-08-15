import { Injectable } from '@nestjs/common';
import { CreateEmployeeAdminDto } from './dto/create-employee-admin.dto';
import { UpdateEmployeeAdminDto } from './dto/update-employee-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../employee/entities/employee.entity';
import { Admin } from '../admin/entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeAdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>

  ) {}

  create(createEmployeeAdminDto: CreateEmployeeAdminDto) {
    return 'This action adds a new employeeAdmin';
  }

  async findAll() {
    return this.adminRepository.find({relations: ['employee']});
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeAdmin`;
  }

  update(id: number, updateEmployeeAdminDto: UpdateEmployeeAdminDto) {
    return `This action updates a #${id} employeeAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeAdmin`;
  }
}
