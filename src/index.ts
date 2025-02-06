import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './Routes/userRoutes';
import addRoutes from './Routes/addRoutes';
import chatRoutes from './Routes/chatRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/adds', addRoutes);
app.use('/api/chats', chatRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
