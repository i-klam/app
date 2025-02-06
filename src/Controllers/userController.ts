import { Request, Response } from 'express';
import pool from '../Config/db';

/**
 * GET /api/users
 * Retrieves all users.
 */
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * GET /api/users/:id
 * Retrieves a single user by ID.
 */
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * POST /api/users
 * Creates a new user.
 */
export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { token, phone, name, lastname, dob } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (token, phone, name, lastname, dob) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [token, phone, name, lastname, dob]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * PUT /api/users/:id
 * Updates an existing user by ID.
 */
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { token, phone, name, lastname, dob } = req.body;
  try {
    const result = await pool.query(
      'UPDATE users SET token = $1, phone = $2, name = $3, lastname = $4, dob = $5 WHERE id = $6 RETURNING *',
      [token, phone, name, lastname, dob, id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * DELETE /api/users/:id
 * Deletes a user by ID.
 */
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
