import { Router } from 'express';
import { getAdds, getAddById, createAdd, updateAdd, deleteAdd } from '../controllers/addController';

const router = Router();

/**
 * @route GET /api/adds
 * @desc Retrieve all ads
 */
router.get('/', getAdds);

/**
 * @route GET /api/adds/:id
 * @desc Retrieve an ad by ID
 */
router.get('/:id', getAddById);

/**
 * @route POST /api/adds
 * @desc Create a new ad
 */
router.post('/', createAdd);

/**
 * @route PUT /api/adds/:id
 * @desc Update an ad by ID
 */
router.put('/:id', updateAdd);

/**
 * @route DELETE /api/adds/:id
 * @desc Delete an ad by ID
 */
router.delete('/:id', deleteAdd);

export default router;
