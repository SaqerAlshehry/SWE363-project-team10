import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Link to users listings
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Trade', 'Donation'],
    required: true
  },
  itemType: {
    type: String,
    required: true
    // add later catigoris from admin
  },
  image: {
    type: String // Add the image handeling library later
  }
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);
export default Item;
