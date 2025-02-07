import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('adds_rate')
export class AddRate {
  @PrimaryGeneratedColumn()
  add_rate_id!: number;

  @Column()
  add_rate_postId!: number; // add_id in adds

  @Column({ type: 'json' })
  add_rates!: any; 
  // [{ user: "user_token", rate: 0 }, { user: "another_token", rate: 1 }]
}
