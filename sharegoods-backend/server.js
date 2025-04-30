import express from 'express';
import { connectToMongoDB } from './config/connect.js';
// import userRoutes from './routes/UserRoutes.js';
// import itemRoutes from './routes/ItemRoutes.js';
// import commentRoutes from './routes/CommentsRoutes.js';
// import categoryRoutes from './routes/CategoryRoutes.js';
// import adminRoutes from './routes/AdminRoutes.js';
const app = express();

app.use(express.json()); 
// app.use('/api/categories', categoryRoutes); 
// app.use('/api/admin', adminRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/items', itemRoutes);
// app.use('/api/comments', commentRoutes);

connectToMongoDB();

app.listen(3000, () => console.log('Server running on port 3000'));
