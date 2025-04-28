import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

// Add new item (listing)
router.post('/', async (req, res) => {
  // add item logic
});

// Get all items (for homepage)
router.get('/', async (req, res) => {
  // get all items logic
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
