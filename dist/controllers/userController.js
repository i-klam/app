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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const db_1 = __importDefault(require("../config/db"));
/**
 * GET /api/users
 * Retrieves all users.
 */
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM users');
        res.json(result.rows);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getUsers = getUsers;
/**
 * GET /api/users/:id
 * Retrieves a single user by ID.
 */
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query('SELECT * FROM users WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        }
        else {
            res.json(result.rows[0]);
        }
    }
    catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getUserById = getUserById;
/**
 * POST /api/users
 * Creates a new user.
 */
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, phone, name, lastname, dob } = req.body;
    try {
        const result = yield db_1.default.query('INSERT INTO users (token, phone, name, lastname, dob) VALUES ($1, $2, $3, $4, $5) RETURNING *', [token, phone, name, lastname, dob]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.createUser = createUser;
/**
 * PUT /api/users/:id
 * Updates an existing user by ID.
 */
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { token, phone, name, lastname, dob } = req.body;
    try {
        const result = yield db_1.default.query('UPDATE users SET token = $1, phone = $2, name = $3, lastname = $4, dob = $5 WHERE id = $6 RETURNING *', [token, phone, name, lastname, dob, id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        }
        else {
            res.json(result.rows[0]);
        }
    }
    catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.updateUser = updateUser;
/**
 * DELETE /api/users/:id
 * Deletes a user by ID.
 */
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        }
        else {
            res.json({ message: 'User deleted successfully' });
        }
    }
    catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.deleteUser = deleteUser;
