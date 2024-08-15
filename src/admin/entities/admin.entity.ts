import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from 'src/employee/entities/employee.entity';

@Entity({ name: 'admin_account' })
export class Admin {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'integer' })
    employee_id: number;

    @Column({ type: 'integer' })
    company_id: number;

    @Column({ type: 'varchar', length: 100 })
    password: string;

    @ManyToOne(() => Employee, (employee) => employee.admins)
    @JoinColumn({ name: 'employee_id', referencedColumnName: 'id_employee' })
    employee: Employee;
}