import { Router } from 'express';
import {
  getChats,
  getChatById,
  createChat,
  deleteChat,
  getMessagesByChatId,
  sendMessage
} from '../controllers/chatController';

const router = Router();

/**
 * @route   GET /api/chats
 * @desc    Retrieve all chats
 */
router.get('/', getChats);

/**
 * @route   GET /api/chats/:id
 * @desc    Retrieve a chat by ID
 */
router.get('/:id', getChatById);

/**
 * @route   POST /api/chats
 * @desc    Create a new chat
 */
router.post('/', createChat);

/**
 * @route   DELETE /api/chats/:id
 * @desc    Delete a chat by ID
 */
router.delete('/:id', deleteChat);

/**
 * @route   GET /api/chats/:chatId/messages
 * @desc    Retrieve all messages for a specific chat
 */
router.get('/:chatId/messages', getMessagesByChatId);

/**
 * @route   POST /api/chats/:chatId/messages
 * @desc    Send a new message in a chat
 */
router.post('/:chatId/messages', sendMessage);

export default router;
