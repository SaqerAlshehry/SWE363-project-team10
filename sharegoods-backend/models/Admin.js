import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
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
        minlength: 8
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
        default: 0
    }



}, { timestamps: true });


const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;


