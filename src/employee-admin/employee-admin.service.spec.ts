import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeAdminService } from './employee-admin.service';

describe('EmployeeAdminService', () => {
  let service: EmployeeAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeAdminService],
    }).compile();

    service = module.get<EmployeeAdminService>(EmployeeAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
