import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('adds')
export class Add {
  @PrimaryGeneratedColumn()
  add_id!: number;

  @Column()
  add_name!: string;

  @Column()
  add_disc!: string;

  @Column()
  add_cat!: string;

  @Column()
  add_img!: string; // img link

  @Column()
  add_owner!: string; // user.token

  @Column('float')
  add_prise!: number;

  @Column()
  add_location!: string;

  @CreateDateColumn()
  add_createdAt!: Date;

  @Column()
  add_count!: number; // 0 by default 
}
