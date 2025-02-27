const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes"); // Use require()

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running with MongoDB!");
});

// Use Routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;