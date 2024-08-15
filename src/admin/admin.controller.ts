import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createAdminDto: CreateAdminDto) {
    const admin = await this.adminService.create(createAdminDto);
    return {
      status: 'success',
      statusCode: HttpStatus.CREATED,
      data: admin,
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll()  {
    const admins = await this.adminService.findAll();
    return {
      status: 'success',
      statusCode: HttpStatus.OK,
      data: admins,
    }
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
 async findOne(@Param('id') id: number) {
    const admin = await this.adminService.findOne(+id);
    return {
      status: 'success',
      statusCode: HttpStatus.OK,
      data: admin
    }
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: number,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    const admin = await this.adminService.update(+id, updateAdminDto);
    return {
      status: 'success',
      statusCode: HttpStatus.OK,
      data: admin
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id',ParseIntPipe) id: number) {
    const admin = await this.adminService.remove(+id);
    return {
      status: 'success',
      statusCode: HttpStatus.OK,
      data: admin
    }
  }

  @Get('/employee/:id')
  @HttpCode(HttpStatus.OK)
  async getEmployee(@Param('id') id: number) {
    const employee = await this.adminService.getEmployee(+id);
    return {
      status: 'success',
      statusCode: HttpStatus.OK,
      data: employee
    }
  }
  

 
}
