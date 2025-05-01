import express from 'express';
import Item from '../models/Listings.js';

const router = express.Router();

// Add new item (listing)
router.post('/', async (req, res) => {
  // add item logic
});

// Get all items (for homepage)
router.get('/', async (req, res) => {
  const { category } = req.query;
  const filter = category ? { itemType: category } : {};

  try {
    const items = await Item.find(filter);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching items', error: err.message });
  }
});

// Get items by user (user's previous posts)
router.get('/my-items/:userId', async (req, res) => {
  // get user's items
});

// Delete item
router.delete('/:itemId', async (req, res) => {
  // delete item logic
});

export default router;
