import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
  }
});

router.post('/comments', async (req, res) => {
  try {
    const { comment } = req.body;
    const newComment = new Comment({ comment });
    await newComment.save();
    res.status(201).json({ message: 'Comment posted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error posting comment', error: error.message });
  }
});


export default router;
