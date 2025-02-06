"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    user: process.env.PGUSER || 'postgres',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'app',
    password: process.env.PGPASSWORD || '123456',
    port: Number(process.env.PGPORT) || 5432,
});
pool.connect()
    .then(() => console.log('Connected to PostgreSQL...'))
    .catch(err => console.error('Connection error', err.stack));
exports.default = pool;
