import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('adds_comments')
export class AddComment {
  @PrimaryGeneratedColumn()
  add_comment_id!: number;

  @Column()
  add_comment_user!: string; // user.token

  @Column()
  add_comment!: string;
}
