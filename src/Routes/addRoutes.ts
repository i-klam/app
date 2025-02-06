import { Router } from 'express';
import {
  getAdds,
  getAddById,
  createAdd,
  updateAdd,
  deleteAdd
} from '../Controllers/addController';

const router = Router();

/**
 * @route   GET /api/adds
 * @desc    Retrieve all ads
 * @access  Public
 */
router.get('/', getAdds);

/**
 * @route   GET /api/adds/:id
 * @desc    Retrieve a single ad by ID
 * @access  Public
 */
router.get('/:id', getAddById);

/**
 * @route   POST /api/adds
 * @desc    Create a new ad
 * @access  Public
 */
router.post('/', createAdd);

/**
 * @route   PUT /api/adds/:id
 * @desc    Update an ad by ID
 * @access  Public
 */
router.put('/:id', updateAdd);

/**
 * @route   DELETE /api/adds/:id
 * @desc    Delete an ad by ID
 * @access  Public
 */
router.delete('/:id', deleteAdd);

export default router;
