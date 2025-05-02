import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectToMongoDB } from './config/connect.js';
import userRoutes from './routes/UserRoutes.js';
import itemRoutes from './routes/ItemRoutes.js';
// import commentRoutes from './routes/CommentsRoutes.js';
import categoryRoutes from './routes/CategoryRoute.js';
import adminRoutes from './routes/AdminRoutes.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
// app.use('/api/comments', commentRoutes);

// Connect to MongoDB
connectToMongoDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));