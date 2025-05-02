import express from 'express';
import Item from '../models/Listings.js';

const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const { title, description, type, itemType, image, userId } = req.body;

    if (!title || !description || !type || !itemType) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newItem = new Item({
      //user: userId, dont forget to add it back in the if statement
      title,
      description,
      type,
      itemType,
      image
    });

    await newItem.save();
    res.status(201).json({ message: 'Item posted successfully', item: newItem });
  } catch (err) {
    console.error('Error creating item:', err);
    res.status(500).json({ message: 'Failed to create item', error: err.message });
  }
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


//fetch item by id
router.get('/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving item', error: err.message });
  }
});

// DELETE /api/items/:itemId
router.delete('/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;

    const deletedItem = await Item.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully', item: deletedItem });
  } catch (err) {
    console.error('Error deleting item:', err);
    res.status(500).json({ message: 'Failed to delete item', error: err.message });
  }
});


export default router;
