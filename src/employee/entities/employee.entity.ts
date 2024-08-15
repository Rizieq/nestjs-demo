import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Admin } from 'src/admin/entities/admin.entity';

@Entity({ name: 'employee' })
export class Employee {
    @PrimaryGeneratedColumn({ type: 'int' })
    id_employee: number;

    @Column({ type: 'integer' })
    personal_information_id: number;

    @Column({ type: 'integer' })
    general_information_id: number;

    @Column({ type: 'integer' })
    job_information_id: number;

    @Column({ type: 'integer' })
    company_id: number;

    @Column({ type: 'varchar' })
    password: string;

    @OneToMany(() => Admin, (admin) => admin.employee)
    admins: Admin[];
}