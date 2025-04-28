// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^s\d{9}@kfupm\.edu\.sa$/, 'Email must be in the format sXXXXXXXXX@kfupm.edu.sa'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8 // password must be at least 8 characters long
  },
  building: {
    type: Number,
    required: true
  },
  room: {
    type: Number,
    required: true
  },
  points: {
    type: Number,
    default: 0  // Default points to 0
  }
  
  
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;


