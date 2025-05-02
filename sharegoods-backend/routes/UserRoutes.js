import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


const router = express.Router();

// ========== Register Route ==========
router.post('/register', async (req, res) => {
  try {
    const { name, phoneNumber, email, password, confirmPassword, building, room } = req.body;

    // Validate required fields
    if (!name || !phoneNumber || !email || !password || !building || !room) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^s\d{9}@kfupm\.edu\.sa$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email must be in the format sXXXXXXXXX@kfupm.edu.sa' });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if password meets minimum length requirement
    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }

    // Validate phone number (must be 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({ message: 'Invalid phone number format. Must be exactly 10 digits.' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      phoneNumber,
      email,
      password: hashedPassword,
      building,
      room,
      points: 0
    });

    // Save to database
    await newUser.save();

    // Generate JWT
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        building: newUser.building,
        room: newUser.room,
        points: newUser.points
      }
    });
  } catch (err) {
    console.error('Error registering user:', err.message || err);
    res.status(500).json({ message: 'Failed to register user. Please try again later.' });
  }
});

// ========== Login Route ==========
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        building: user.building,
        room: user.room,
        points: user.points
      }
    });
  } catch (err) {
    console.error('Error during login:', err.message || err);
    res.status(500).json({ message: 'An error occurred during login. Please try again later.' });
  }
});

// ========== Token Verification Middleware ==========
export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.error('Error verifying token:', err.message || err);

    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired. Please log in again.' });
    } else if (err.name === 'JsonWebTokenError') {
      return res.status(400).json({ message: 'Invalid token. Please provide a valid token.' });
    }

    res.status(500).json({ message: 'An error occurred while verifying the token.' });
  }
};

router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user profile' });
  }
});


export default router;
