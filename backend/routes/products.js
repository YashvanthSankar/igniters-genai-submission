const express = require("express");
const router = express.Router();
const { products } = require("../data/products");

// Get all products with filtering and sorting
router.get("/", (req, res) => {
  try {
    let result = [...products];

    // Apply category filter
    if (req.query.category && req.query.category !== "all") {
      result = result.filter(
        (product) => product.category === req.query.category
      );
    }

    // Apply search filter
    if (req.query.search) {
      const searchTerm = req.query.search.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Apply price range filter
    if (req.query.minPrice || req.query.maxPrice) {
      const minPrice = parseInt(req.query.minPrice) || 0;
      const maxPrice = parseInt(req.query.maxPrice) || Infinity;
      result = result.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    // Apply in-stock filter
    if (req.query.inStock === "true") {
      result = result.filter((product) => product.inStock && product.stock > 0);
    }

    // Apply sorting
    if (req.query.sortBy) {
      switch (req.query.sortBy) {
        case "price_low":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price_high":
          result.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          result.sort((a, b) => b.rating - a.rating);
          break;
        case "reviews":
          result.sort((a, b) => b.reviews - a.reviews);
          break;
        case "name":
        default:
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    }

    // Apply pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedResult = result.slice(startIndex, endIndex);

    res.json({
      products: paginatedResult,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(result.length / limit),
        totalItems: result.length,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get product by ID
router.get("/:id", (req, res) => {
  try {
    const product = products.find((p) => p.id === req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search products
router.get("/search/:query", (req, res) => {
  try {
    const searchTerm = req.params.query.toLowerCase();
    const result = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get products by category
router.get("/category/:category", (req, res) => {
  try {
    const category = req.params.category;
    const result = products.filter((product) => product.category === category);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get featured products (high rated)
router.get("/featured/list", (req, res) => {
  try {
    const result = products
      .filter((product) => product.rating >= 4.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get trending products (most reviewed)
router.get("/trending/list", (req, res) => {
  try {
    const result = products.sort((a, b) => b.reviews - a.reviews).slice(0, 6);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get related products
router.get("/:id/related", (req, res) => {
  try {
    const product = products.find((p) => p.id === req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const result = products
      .filter((p) => p.id !== req.params.id && p.category === product.category)
      .slice(0, 4);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add product review (placeholder)
router.post("/:id/reviews", (req, res) => {
  try {
    const { rating, comment, userName } = req.body;

    // In a real app, this would save to database
    res.json({
      message: "Review added successfully",
      review: {
        id: Date.now().toString(),
        productId: req.params.id,
        rating,
        comment,
        userName,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get product reviews (placeholder)
router.get("/:id/reviews", (req, res) => {
  try {
    // In a real app, this would fetch from database
    const mockReviews = [
      {
        id: "1",
        productId: req.params.id,
        rating: 5,
        comment: "Great product! Exactly as described.",
        userName: "John D.",
        createdAt: "2024-01-10T10:30:00Z",
      },
      {
        id: "2",
        productId: req.params.id,
        rating: 4,
        comment: "Good quality, fast shipping.",
        userName: "Sarah M.",
        createdAt: "2024-01-08T15:45:00Z",
      },
    ];

    res.json(mockReviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
