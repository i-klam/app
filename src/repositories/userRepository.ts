import { AppDataSource } from '../config/db';
import { User } from '../models/User';

const userRepo = AppDataSource.getRepository(User);

/** Retrieve all users */
export const getUsers = async (): Promise<User[]> => {
  return await userRepo.find();
};

/** Retrieve user by ID */
export const getUserById = async (id: number): Promise<User | null> => {
  return await userRepo.findOneBy({ id });
};

/** Create new user */
export const createUser = async (userData: Partial<User>): Promise<User> => {
  const user = userRepo.create(userData);
  return await userRepo.save(user);
};

/** Update existing user */
export const updateUser = async (id: number, userData: Partial<User>): Promise<User | null> => {
  const user = await userRepo.findOneBy({ id });
  if (!user) return null;
  Object.assign(user, userData);
  return await userRepo.save(user);
};

/** Delete user by ID */
export const deleteUser = async (id: number): Promise<boolean> => {
  const result = await userRepo.delete(id);
  return result.affected !== 0;
};

/** Retrieve user by token */
export const getUserByToken = async (token: string): Promise<User | null> => {
  return await userRepo.findOneBy({ token });
};
