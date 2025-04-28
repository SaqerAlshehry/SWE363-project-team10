import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  // registration logic
});

// Login user
router.post('/login', async (req, res) => {
  // login logic
});

// Get user profile (with points and rank)
router.get('/profile/:userId', async (req, res) => {
  // get user info
});

export default router;
