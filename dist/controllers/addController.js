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
exports.deleteAdd = exports.updateAdd = exports.createAdd = exports.getAddById = exports.getAdds = void 0;
const db_1 = __importDefault(require("../config/db"));
/**
 * GET /api/adds
 * Retrieves all ads.
 */
const getAdds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM adds');
        res.json(result.rows);
    }
    catch (error) {
        console.error('Error fetching adds:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getAdds = getAdds;
/**
 * GET /api/adds/:id
 * Retrieves a single ad by ID.
 */
const getAddById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query('SELECT * FROM adds WHERE add_id = $1', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Add not found' });
        }
        else {
            res.json(result.rows[0]);
        }
    }
    catch (error) {
        console.error('Error fetching add:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getAddById = getAddById;
/**
 * POST /api/adds
 * Creates a new ad.
 */
const createAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { add_name, add_disc, add_cat, add_img, add_owner, add_prise, add_location, add_count } = req.body;
    try {
        const result = yield db_1.default.query(`INSERT INTO adds (
          add_name, add_disc, add_cat, add_img, add_owner, add_prise, add_location, add_count
       ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [add_name, add_disc, add_cat, add_img, add_owner, add_prise, add_location, add_count]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error creating add:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.createAdd = createAdd;
/**
 * PUT /api/adds/:id
 * Updates an ad by ID.
 */
const updateAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { add_name, add_disc, add_cat, add_img, add_owner, add_prise, add_location, add_count } = req.body;
    try {
        const result = yield db_1.default.query(`UPDATE adds SET 
          add_name = $1, add_disc = $2, add_cat = $3, add_img = $4,
          add_owner = $5, add_prise = $6, add_location = $7, add_count = $8
       WHERE add_id = $9 RETURNING *`, [add_name, add_disc, add_cat, add_img, add_owner, add_prise, add_location, add_count, id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Add not found' });
        }
        else {
            res.json(result.rows[0]);
        }
    }
    catch (error) {
        console.error('Error updating add:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.updateAdd = updateAdd;
/**
 * DELETE /api/adds/:id
 * Deletes an ad by ID.
 */
const deleteAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield db_1.default.query('DELETE FROM adds WHERE add_id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Add not found' });
        }
        else {
            res.json({ message: 'Add deleted successfully' });
        }
    }
    catch (error) {
        console.error('Error deleting add:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
exports.deleteAdd = deleteAdd;
