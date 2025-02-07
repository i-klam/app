import { Request, Response } from 'express';
import * as addService from '../services/addService';

/**
 * @route GET /api/adds
 * @desc Retrieve all ads
 */
export const getAdds = async (req: Request, res: Response): Promise<void> => {
  try {
    const adds = await addService.getAdds();
    res.json(adds);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route GET /api/adds/:id
 * @desc Retrieve an ad by ID
 */
export const getAddById = async (req: Request, res: Response): Promise<void> => {
  try {
    const ad = await addService.getAddById(Number(req.params.id));
    if (!ad) res.status(404).json({ error: 'Ad not found' });
    else res.json(ad);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route POST /api/adds
 * @desc Create a new ad
 */
export const createAdd = async (req: Request, res: Response): Promise<void> => {
  try {
    const newAdd = await addService.createAdd(req.body);
    res.status(201).json(newAdd);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route PUT /api/adds/:id
 * @desc Update an ad by ID
 */
export const updateAdd = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedAdd = await addService.updateAdd(Number(req.params.id), req.body);
    if (!updatedAdd) res.status(404).json({ error: 'Ad not found' });
    else res.json(updatedAdd);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route DELETE /api/adds/:id
 * @desc Delete an ad by ID
 */
export const deleteAdd = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await addService.deleteAdd(Number(req.params.id));
    if (!deleted) res.status(404).json({ error: 'Ad not found' });
    else res.json({ message: 'Ad deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
