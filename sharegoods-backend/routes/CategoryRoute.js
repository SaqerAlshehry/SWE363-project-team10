import express from 'express';
import Category from '../models/Category.js';

const router = express.Router();

// Get all categories (for dropdown)
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
  }
});

export default router;
