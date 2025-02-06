import { Router } from 'express';
import {
  getChats,
  getChatById,
  createChat,
  deleteChat,
  getMessagesByChatId,
  sendMessage
} from '../Controllers/chatController';

const router = Router();

/**
 * @route   GET /api/chats
 * @desc    Retrieve all chats
 * @access  Public
 */
router.get('/', getChats);

/**
 * @route   GET /api/chats/:id
 * @desc    Retrieve a single chat by ID
 * @access  Public
 */
router.get('/:id', getChatById);

/**
 * @route   POST /api/chats
 * @desc    Create a new chat
 * @access  Public
 */
router.post('/', createChat);

/**
 * @route   DELETE /api/chats/:id
 * @desc    Delete a chat by ID
 * @access  Public
 */
router.delete('/:id', deleteChat);

/**
 * @route   GET /api/chats/:chatId/messages
 * @desc    Retrieve all messages for a specific chat
 * @access  Public
 */
router.get('/:chatId/messages', getMessagesByChatId);

/**
 * @route   POST /api/chats/:chatId/messages
 * @desc    Send a new message in a chat
 * @access  Public
 */
router.post('/:chatId/messages', sendMessage);

export default router;
