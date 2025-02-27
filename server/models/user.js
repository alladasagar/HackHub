const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String } // Optional field
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
