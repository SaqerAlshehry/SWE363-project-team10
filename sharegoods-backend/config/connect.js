import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURI = process.env.MONGO_URI;

export async function connectToMongoDB() {
  try {
    await mongoose.connect(dbURI);
    console.log("✅ Connected to MongoDB Atlas successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}


