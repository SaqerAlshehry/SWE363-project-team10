// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^\d{10}$/, 'Phone number must be exactly 10 digits']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    match: [/^s\d{9}@kfupm\.edu\.sa$/, 'Email must be in the format sXXXXXXXXX@kfupm.edu.sa']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long']
  },
  building: {
    type: Number,
    required: [true, 'Building number is required'],
    min: [1, 'Building number must be a positive integer']
  },
  room: {
    type: Number,
    required: [true, 'Room number is required'],
    min: [1, 'Room number must be a positive integer']
  },
  points: {
    type: Number,
    default: 0, // Default points to 0
    min: [0, 'Points cannot be negative']
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;


