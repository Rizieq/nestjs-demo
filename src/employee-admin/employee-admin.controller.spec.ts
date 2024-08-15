import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeAdminController } from './employee-admin.controller';
import { EmployeeAdminService } from './employee-admin.service';

describe('EmployeeAdminController', () => {
  let controller: EmployeeAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeAdminController],
      providers: [EmployeeAdminService],
    }).compile();

    controller = module.get<EmployeeAdminController>(EmployeeAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
