import { Request, Response } from 'express';
import * as chatService from '../services/chatService';

/**
 * @route GET /api/chats
 * @desc Retrieve all chats
 */
export const getChats = async (req: Request, res: Response): Promise<void> => {
  try {
    const chats = await chatService.getChats();
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route GET /api/chats/:id
 * @desc Retrieve a chat by ID
 */
export const getChatById = async (req: Request, res: Response): Promise<void> => {
  try {
    const chat = await chatService.getChatById(Number(req.params.id));
    if (!chat) res.status(404).json({ error: 'Chat not found' });
    else res.json(chat);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route POST /api/chats
 * @desc Create a new chat
 */
export const createChat = async (req: Request, res: Response): Promise<void> => {
  try {
    const newChat = await chatService.createChat(req.body);
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route DELETE /api/chats/:id
 * @desc Delete a chat by ID
 */
export const deleteChat = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await chatService.deleteChat(Number(req.params.id));
    if (!deleted) res.status(404).json({ error: 'Chat not found' });
    else res.json({ message: 'Chat deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route GET /api/chats/:chatId/messages
 * @desc Retrieve all messages for a specific chat
 */
export const getMessagesByChatId = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages = await chatService.getMessagesByChatId(Number(req.params.chatId));
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

/**
 * @route POST /api/chats/:chatId/messages
 * @desc Send a new message in a chat
 */
export const sendMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const messageData = { chat_id: Number(req.params.chatId), ...req.body };
    const newMessage = await chatService.sendMessage(messageData);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
