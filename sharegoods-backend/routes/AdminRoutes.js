import express from 'express';
import User from '../models/User.js';
import Item from '../models/Item.js';
import Category from '../models/Category.js';

const router = express.Router();

// Get total members
router.get('/total-members', async (req, res) => {
  try {
    const totalMembers = await User.countDocuments();
    res.json({ totalMembers });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching total members', error: error.message });
  }
});

// Get total listings
router.get('/total-listings', async (req, res) => {
  try {
    const totalListings = await Item.countDocuments();
    res.json({ totalListings });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching total listings', error: error.message });
  }
});

// Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
  }
});

// Add new category
router.post('/categories', async (req, res) => {
  try {
    const { name } = req.body;

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const newCategory = new Category({ name });
    await newCategory.save();
    res.json({ message: 'Category added', category: newCategory });
    
  } catch (error) {
    res.status(500).json({ message: 'Error adding category', error: error.message });
  }
});

export default router;
