import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController';


const router = Router();

/**
 * @route   GET /api/users
 * @desc    Retrieve all users
 */
router.get('/', getUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Retrieve a user by ID
 */
router.get('/:id', getUserById);

/**
 * @route   POST /api/users
 * @desc    Create a new user
 */
router.post('/', createUser);

/**
 * @route   PUT /api/users/:id
 * @desc    Update an existing user
 */
router.put('/:id', updateUser);

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user by ID
 */
router.delete('/:id', deleteUser);

export default router;
