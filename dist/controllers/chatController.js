"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.getMessagesByChatId = exports.deleteChat = exports.createChat = exports.getChatById = exports.getChats = void 0;
const db_1 = __importDefault(require("../config/db"));
/*
   Chat endpoints
*/
/**
 * GET /api/chats
 * Retrieves all chats.
 */
const getChats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM chats');
        res.json(result.rows);
    }
    catch (error) {
        console.error('Error fetching chats:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getChats = getChats;
/**
 * GET /api/chats/:id
 * Retrieves a single chat by ID.
 */
const getChatById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query('SELECT * FROM chats WHERE chat_id = $1', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Chat not found' });
        }
        else {
            res.json(result.rows[0]);
        }
    }
    catch (error) {
        console.error('Error fetching chat:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getChatById = getChatById;
/**
 * POST /api/chats
 * Creates a new chat.
 */
const createChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user1_token, user2_token } = req.body;
    try {
        const result = yield db_1.default.query('INSERT INTO chats (user1_token, user2_token) VALUES ($1, $2) RETURNING *', [user1_token, user2_token]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error creating chat:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.createChat = createChat;
/**
 * DELETE /api/chats/:id
 * Deletes a chat by ID.
 */
const deleteChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query('DELETE FROM chats WHERE chat_id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Chat not found' });
        }
        else {
            res.json({ message: 'Chat deleted successfully' });
        }
    }
    catch (error) {
        console.error('Error deleting chat:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.deleteChat = deleteChat;
/*
   Message endpoints
*/
/**
 * GET /api/chats/:chatId/messages
 * Retrieves all messages for a specific chat.
 */
const getMessagesByChatId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { chatId } = req.params;
    try {
        const result = yield db_1.default.query('SELECT * FROM messages WHERE chat_id = $1', [chatId]);
        res.json(result.rows);
    }
    catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getMessagesByChatId = getMessagesByChatId;
/**
 * POST /api/chats/:chatId/messages
 * Sends a new message in a chat.
 */
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { chatId } = req.params;
    const { sender_token, message_text, message_img } = req.body;
    try {
        const result = yield db_1.default.query(`INSERT INTO messages (chat_id, sender_token, message_text, message_img)
       VALUES ($1, $2, $3, $4) RETURNING *`, [chatId, sender_token, message_text, message_img]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.sendMessage = sendMessage;
