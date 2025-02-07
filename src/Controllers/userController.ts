import { Request, Response } from 'express';
import * as userService from '../services/userService';

/**
 * @route GET /api/users
 * @desc Retrieve all users
 */
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route GET /api/users/:id
 * @desc Retrieve a user by ID
 */
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.getUserById(Number(req.params.id));
    if (!user) res.status(404).json({ error: 'User not found' });
    else res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route POST /api/users
 * @desc Create a new user
 */
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route PUT /api/users/:id
 * @desc Update an existing user
 */
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedUser = await userService.updateUser(Number(req.params.id), req.body);
    if (!updatedUser) res.status(404).json({ error: 'User not found' });
    else res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route DELETE /api/users/:id
 * @desc Delete a user by ID
 */
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await userService.deleteUser(Number(req.params.id));
    if (!deleted) res.status(404).json({ error: 'User not found' });
    else res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
