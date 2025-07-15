const express = require("express");
const router = express.Router();
const { categories } = require("../data/products");

// Get all categories
router.get("/", (req, res) => {
  try {
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get category by ID
router.get("/:id", (req, res) => {
  try {
    const category = categories.find((c) => c.id === req.params.id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
