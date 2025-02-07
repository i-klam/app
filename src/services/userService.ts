import * as userRepo from '../repositories/userRepository';
import { User } from '../models/User';
import { v4 as uuidv4 } from 'uuid';

/** Retrieve all users */
export const getUsers = async (): Promise<User[]> => {
  return await userRepo.getUsers();
};

/** Retrieve user by ID */
export const getUserById = async (id: number): Promise<User | null> => {
  return await userRepo.getUserById(id);
};

/** Create new user */
export const createUser = async (userData: Partial<User>): Promise<User> => {
    userData.token = uuidv4();
    return await userRepo.createUser(userData);
  };
  
/** Update existing user */
export const updateUser = async (id: number, userData: Partial<User>): Promise<User | null> => {
  return await userRepo.updateUser(id, userData);
};

/** Delete user by ID */
export const deleteUser = async (id: number): Promise<boolean> => {
  return await userRepo.deleteUser(id);
};

/** Retrieve user by token */
export const getUserByToken = async (token: string): Promise<User | null> => {
  return await userRepo.getUserByToken(token);
};
