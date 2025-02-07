import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../models/User';
import { Add } from '../models/Add';
import { Chat, Message } from '../models/Chat';
import { AddComment } from '../models/AddComment';
import { AddRate } from '../models/AddRate';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PGHOST || 'localhost',
  port: Number(process.env.PGPORT) || 5432,
  username: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '123456',
  database: process.env.PGDATABASE || 'app',
  synchronize: true,
  logging: false,
  entities: [User, Add, Chat, Message, AddComment, AddRate],
});
