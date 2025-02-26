const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const MongoURL = process.env.MONGO_URL; // Get MongoDB URL from .env

const connectDB = async () => {
  try {
    if (!MongoURL) {
      throw new Error("MongoDB URL is missing from .env file!");
    }

    await mongoose.connect(MongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
