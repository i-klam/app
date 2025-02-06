import { Request, Response } from 'express';
import pool from '../Config/db';

/**
 * GET /api/adds
 * Retrieves all ads.
 */
export const getAdds = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM adds');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching adds:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * GET /api/adds/:id
 * Retrieves a single ad by ID.
 */
export const getAddById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM adds WHERE add_id = $1', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Add not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error fetching add:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * POST /api/adds
 * Creates a new ad.
 */
export const createAdd = async (req: Request, res: Response): Promise<void> => {
  const {
    add_name,
    add_disc,
    add_cat,
    add_img,
    add_owner,
    add_prise,
    add_location,
    add_count
  } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO adds (
          add_name, add_disc, add_cat, add_img, add_owner, add_prise, add_location, add_count
       ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [add_name, add_disc, add_cat, add_img, add_owner, add_prise, add_location, add_count]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating add:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * PUT /api/adds/:id
 * Updates an ad by ID.
 */
export const updateAdd = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const {
    add_name,
    add_disc,
    add_cat,
    add_img,
    add_owner,
    add_prise,
    add_location,
    add_count
  } = req.body;
  try {
    const result = await pool.query(
      `UPDATE adds SET 
          add_name = $1, add_disc = $2, add_cat = $3, add_img = $4,
          add_owner = $5, add_prise = $6, add_location = $7, add_count = $8
       WHERE add_id = $9 RETURNING *`,
      [add_name, add_disc, add_cat, add_img, add_owner, add_prise, add_location, add_count, id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Add not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error updating add:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * DELETE /api/adds/:id
 * Deletes an ad by ID.
 */
export const deleteAdd = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM adds WHERE add_id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Add not found' });
    } else {
      res.json({ message: 'Add deleted successfully' });
    }
  } catch (error) {
    console.error('Error deleting add:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
