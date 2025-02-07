import * as chatRepo from '../repositories/chatRepository';
import { Chat, Message } from '../models/Chat';

/** Retrieve all chats */
export const getChats = async (): Promise<Chat[]> => {
  return await chatRepo.getChats();
};

/** Retrieve chat by ID */
export const getChatById = async (id: number): Promise<Chat | null> => {
  return await chatRepo.getChatById(id);
};

/** Create new chat */
export const createChat = async (chatData: Partial<Chat>): Promise<Chat> => {
  return await chatRepo.createChat(chatData);
};

/** Delete chat by ID */
export const deleteChat = async (id: number): Promise<boolean> => {
  return await chatRepo.deleteChat(id);
};

/** Retrieve messages for a chat */
export const getMessagesByChatId = async (chatId: number): Promise<Message[]> => {
  return await chatRepo.getMessagesByChatId(chatId);
};

/** Send a new message */
export const sendMessage = async (messageData: Partial<Message>): Promise<Message> => {
  return await chatRepo.sendMessage(messageData);
};
