"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addController_1 = require("../controllers/addController");
const router = (0, express_1.Router)();
/**
 * @route   GET /api/adds
 * @desc    Retrieve all advertisements
 */
router.get('/', addController_1.getAdds);
/**
 * @route   GET /api/adds/:id
 * @desc    Retrieve an advertisement by ID
 */
router.get('/:id', addController_1.getAddById);
/**
 * @route   POST /api/adds
 * @desc    Create a new advertisement
 */
router.post('/', addController_1.createAdd);
/**
 * @route   PUT /api/adds/:id
 * @desc    Update an advertisement by ID
 */
router.put('/:id', addController_1.updateAdd);
/**
 * @route   DELETE /api/adds/:id
 * @desc    Delete an advertisement by ID
 */
router.delete('/:id', addController_1.deleteAdd);
exports.default = router;
