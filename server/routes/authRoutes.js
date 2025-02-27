const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
    try {
        console.log("Incoming signup data:", req.body);

        const { name, email, password, role, phone, company } = req.body;

        if (!name || !email || !password || !phone || !role) {
            return res.status(400).json({ message: "All fields are required except company" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            id: uuidv4(),
            name,
            email,
            password: hashedPassword,
            role,
            phone,
            company
        });

        console.log("Saving user:", newUser);
        await newUser.save();

        res.status(201).json({ message: "Signup successful!", user: newUser });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Login Route
// Login Route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Incoming login data:", req.body);
        console.log("Login request:", req.body);

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET || "secretKey",
            { expiresIn: "1h" }
        );

        res.status(200).json({ 
            message: "Login successful!", 
            token, 
            role: user.role ,
            userId: user._id 
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


module.exports = router;
