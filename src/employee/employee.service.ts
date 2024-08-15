import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    if(createEmployeeDto.personal_information_id == null || createEmployeeDto.personal_information_id == undefined){
      throw new BadRequestException('personal_information_id cannot be null or undefined');
    }
    if(!createEmployeeDto.personal_information_id){
      throw new BadRequestException('value of personal_information_id cannot be null');
    }
    const employee = this.employeeRepository.create(createEmployeeDto);
    return await this.employeeRepository.save(employee);
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async findOne(id_employee: number) {
    if(id_employee == null || id_employee == undefined){
      throw new BadRequestException('id_employee cannot be null or undefined');
    }
    
    if(!id_employee){
      throw new BadRequestException('value of id_employee cannot be null');
    }
    
    const employee = await this.employeeRepository.findOne({where: {id_employee}});
    if(!employee){
      throw new NotFoundException('Employee with ID ' + id_employee + ' not found');
    }
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
