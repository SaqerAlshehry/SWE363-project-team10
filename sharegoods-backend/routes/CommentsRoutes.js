import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

// Add comment about a user
router.post('/', async (req, res) => {
  // add comment logic
});

// Get comments for a user
router.get('/:userId', async (req, res) => {
  // get comments for user logic
});

export default router;
