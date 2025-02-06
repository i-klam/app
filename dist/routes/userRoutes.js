"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
/**
 * @route   GET /api/users
 * @desc    Retrieve all users
 */
router.get('/', userController_1.getUsers);
/**
 * @route   GET /api/users/:id
 * @desc    Retrieve a user by ID
 */
router.get('/:id', userController_1.getUserById);
/**
 * @route   POST /api/users
 * @desc    Create a new user
 */
router.post('/', userController_1.createUser);
/**
 * @route   PUT /api/users/:id
 * @desc    Update an existing user
 */
router.put('/:id', userController_1.updateUser);
/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user by ID
 */
router.delete('/:id', userController_1.deleteUser);
exports.default = router;
