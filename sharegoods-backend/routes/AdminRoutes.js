import express from 'express';
import User from '../models/User.js';
import Item from '../models/Listings.js';
import Category from '../models/Category.js';
import Admin from "../models/Admin.js";

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

// Get all admin emails
router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
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

// Add a new category (admin only)
router.post('/add', async (req, res) => {
  try {
    const { name } = req.body;

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const newCategory = new Category({ name });
    await newCategory.save();

    res.status(201).json({ message: 'Category added successfully', category: newCategory });
  } catch (error) {
    res.status(500).json({ message: 'Error adding category', error: error.message });
  }
});

// Delete a category (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Category.findByIdAndDelete(id);

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error: error.message });
  }
});


export default router;
