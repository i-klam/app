import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './config/db';
import userRoutes from './routes/userRoutes';
import addRoutes from './routes/addRoutes';
import chatRoutes from './routes/chatRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/adds', addRoutes);
app.use('/api/chats', chatRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log('Connected to PostgreSQL via TypeORM ');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error('Error during Data Source initialization:', error));
