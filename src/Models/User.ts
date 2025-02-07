import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  token!: string;

  @Column({ unique: true })
  phone!: number;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column({ type: 'date' })
  dob!: Date;
}
