import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { Employee } from 'src/employee/entities/employee.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
    
  ) {}
 async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const admin = this.adminRepository.create(createAdminDto);
    return await this.adminRepository.save(admin);
  }

  async findAll(): Promise<Admin[]> {
    return await this.adminRepository.find({relations: ['employee']});
  }

  async findOne(id: number): Promise<Admin> {
    const admin = await this.adminRepository.findOne({where: {id}, relations: ['employee']});
    if (!admin) {
        throw new NotFoundException();
    }
    return admin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const admin = await this.findOne(id);
    if(!admin){
      throw new NotFoundException();  
    } else {
      Object.assign(admin, updateAdminDto);
    }
    await this.adminRepository.save(admin);
    return admin;
    
  }

  async remove(id: number): Promise<{message: string}> {
    const result = await this.adminRepository.delete(id);
    if(result.affected === 0){
        throw new NotFoundException();
    }
    return {message: 'Admin with id: ' + id + ' was deleted'}
    }

  async getEmployee(id_employee: number){
    return await this.employeeRepository.find({where: {id_employee}});
  }

  
}
