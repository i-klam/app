"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatController_1 = require("../controllers/chatController");
const router = (0, express_1.Router)();
/**
 * @route   GET /api/chats
 * @desc    Retrieve all chats
 */
router.get('/', chatController_1.getChats);
/**
 * @route   GET /api/chats/:id
 * @desc    Retrieve a chat by ID
 */
router.get('/:id', chatController_1.getChatById);
/**
 * @route   POST /api/chats
 * @desc    Create a new chat
 */
router.post('/', chatController_1.createChat);
/**
 * @route   DELETE /api/chats/:id
 * @desc    Delete a chat by ID
 */
router.delete('/:id', chatController_1.deleteChat);
/**
 * @route   GET /api/chats/:chatId/messages
 * @desc    Retrieve all messages for a specific chat
 */
router.get('/:chatId/messages', chatController_1.getMessagesByChatId);
/**
 * @route   POST /api/chats/:chatId/messages
 * @desc    Send a new message in a chat
 */
router.post('/:chatId/messages', chatController_1.sendMessage);
exports.default = router;
