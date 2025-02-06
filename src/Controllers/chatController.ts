import { Request, Response } from 'express';
import pool from '../Config/db';

/* 
   Chat endpoints 
*/

/**
 * GET /api/chats
 * Retrieves all chats.
 */
export const getChats = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM chats');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching chats:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * GET /api/chats/:id
 * Retrieves a single chat by ID.
 */
export const getChatById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM chats WHERE chat_id = $1', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Chat not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error fetching chat:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * POST /api/chats
 * Creates a new chat.
 */
export const createChat = async (req: Request, res: Response): Promise<void> => {
  const { user1_token, user2_token } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO chats (user1_token, user2_token) VALUES ($1, $2) RETURNING *',
      [user1_token, user2_token]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * DELETE /api/chats/:id
 * Deletes a chat by ID.
 */
export const deleteChat = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM chats WHERE chat_id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Chat not found' });
    } else {
      res.json({ message: 'Chat deleted successfully' });
    }
  } catch (error) {
    console.error('Error deleting chat:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/* 
   Message endpoints 
*/

/**
 * GET /api/chats/:chatId/messages
 * Retrieves all messages for a specific chat.
 */
export const getMessagesByChatId = async (req: Request, res: Response): Promise<void> => {
  const { chatId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM messages WHERE chat_id = $1', [chatId]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * POST /api/chats/:chatId/messages
 * Sends a new message in a chat.
 */
export const sendMessage = async (req: Request, res: Response): Promise<void> => {
  const { chatId } = req.params;
  const { sender_token, message_text, message_img } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO messages (chat_id, sender_token, message_text, message_img)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [chatId, sender_token, message_text, message_img]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
