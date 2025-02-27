const express = require("express");
const Product = require("../models/product");
const router = express.Router();

// Add new product
router.post("/add", async (req, res) => {
    try {
        const { name, price, quantity, description, manufacturerId } = req.body;

        if (!name || !price || !quantity || !description || !manufacturerId) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = new Product({
            name,
            price,
            quantity,
            description,
            manufacturer: manufacturerId
        });

        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
