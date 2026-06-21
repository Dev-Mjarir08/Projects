const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/amdox_erp";
    await mongoose.connect(connStr);
    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
