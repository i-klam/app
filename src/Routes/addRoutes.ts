import { Router } from 'express';
import {
  getAdds,
  getAddById,
  createAdd,
  updateAdd,
  deleteAdd
} from '../controllers/addController';

const router = Router();

/**
 * @route   GET /api/adds
 * @desc    Retrieve all advertisements
 */
router.get('/', getAdds);

/**
 * @route   GET /api/adds/:id
 * @desc    Retrieve an advertisement by ID
 */
router.get('/:id', getAddById);

/**
 * @route   POST /api/adds
 * @desc    Create a new advertisement
 */
router.post('/', createAdd);

/**
 * @route   PUT /api/adds/:id
 * @desc    Update an advertisement by ID
 */
router.put('/:id', updateAdd);

/**
 * @route   DELETE /api/adds/:id
 * @desc    Delete an advertisement by ID
 */
router.delete('/:id', deleteAdd);

export default router;
