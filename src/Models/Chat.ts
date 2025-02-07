import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm';

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn()
  chat_id!: number;

  @Column()
  user1_token!: string;

  @Column()
  user2_token!: string;

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(() => Message, message => message.chat)
  messages!: Message[];
}

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  message_id!: number;

  @Column()
  chat_id!: number;

  @ManyToOne(() => Chat, chat => chat.messages)
  @JoinColumn({ name: 'chat_id' })
  chat!: Chat;

  @Column()
  sender_token!: string;

  @Column()
  message_text!: string;

  @Column({ nullable: true })
  message_img!: string;

  @CreateDateColumn()
  sent_at!: Date;
}
