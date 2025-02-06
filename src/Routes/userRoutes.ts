import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../Controllers/userController';

const router = Router();

/**
 * @route   GET /api/users
 * @desc    Retrieve all users
 * @access  Public
 */
router.get('/', getUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Retrieve a single user by ID
 * @access  Public
 */
router.get('/:id', getUserById);

/**
 * @route   POST /api/users
 * @desc    Create a new user
 * @access  Public
 */
router.post('/', createUser);

/**
 * @route   PUT /api/users/:id
 * @desc    Update a user by ID
 * @access  Public
 */
router.put('/:id', updateUser);

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user by ID
 * @access  Public
 */
router.delete('/:id', deleteUser);

export default router;
