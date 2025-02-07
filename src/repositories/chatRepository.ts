import { AppDataSource } from '../config/db';
import { Chat, Message } from '../models/Chat';

const chatRepo = AppDataSource.getRepository(Chat);
const messageRepo = AppDataSource.getRepository(Message);

/** Retrieve all chats */
export const getChats = async (): Promise<Chat[]> => {
  return await chatRepo.find({ relations: ['messages'] });
};

/** Retrieve chat by ID */
export const getChatById = async (id: number): Promise<Chat | null> => {
  return await chatRepo.findOne({ where: { chat_id: id }, relations: ['messages'] });
};

/** Create new chat */
export const createChat = async (chatData: Partial<Chat>): Promise<Chat> => {
  const chat = chatRepo.create(chatData);
  return await chatRepo.save(chat);
};

/** Delete chat by ID */
export const deleteChat = async (id: number): Promise<boolean> => {
  const result = await chatRepo.delete(id);
  return result.affected !== 0;
};

/** Retrieve messages by chat ID */
export const getMessagesByChatId = async (chatId: number): Promise<Message[]> => {
  return await messageRepo.find({ where: { chat_id: chatId } });
};

/** Send a new message */
export const sendMessage = async (messageData: Partial<Message>): Promise<Message> => {
  const message = messageRepo.create(messageData);
  return await messageRepo.save(message);
};
