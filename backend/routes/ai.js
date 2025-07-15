const express = require("express");
const router = express.Router();
const { products } = require("../data/products");

// AI-powered product recommendations
router.post("/recommendations", (req, res) => {
  try {
    const { userId, productId, preferences } = req.body;

    // Simulate AI recommendation logic
    let recommendedProducts = [];

    if (productId) {
      const product = products.find((p) => p.id === productId);
      if (product) {
        // Recommend similar products from same category
        recommendedProducts = products
          .filter((p) => p.id !== productId && p.category === product.category)
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6);
      }
    } else {
      // General recommendations based on rating and popularity
      recommendedProducts = products
        .filter((p) => p.rating >= 4.0)
        .sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
        .slice(0, 6);
    }

    res.json({
      recommendations: recommendedProducts,
      algorithm: "collaborative_filtering",
      confidence: 0.85,
      explanation: "Based on similar user preferences and product ratings",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// AI-powered search suggestions
router.get("/search-suggestions", (req, res) => {
  try {
    const query = req.query.q?.toLowerCase() || "";

    if (!query) {
      return res.json({ suggestions: [] });
    }

    // Generate search suggestions based on product names and tags
    const suggestions = [];

    // Add product name suggestions
    products.forEach((product) => {
      if (product.name.toLowerCase().includes(query)) {
        suggestions.push({
          text: product.name,
          type: "product",
          category: product.category,
        });
      }
    });

    // Add category suggestions
    const categories = [
      "electronics",
      "clothing",
      "footwear",
      "accessories",
      "bags",
    ];
    categories.forEach((category) => {
      if (category.includes(query)) {
        suggestions.push({
          text: category,
          type: "category",
          category: category,
        });
      }
    });

    // Add tag suggestions
    const allTags = [...new Set(products.flatMap((p) => p.tags))];
    allTags.forEach((tag) => {
      if (tag.toLowerCase().includes(query)) {
        suggestions.push({
          text: tag,
          type: "tag",
          category: "general",
        });
      }
    });

    // Remove duplicates and limit results
    const uniqueSuggestions = suggestions
      .filter(
        (suggestion, index, self) =>
          index === self.findIndex((s) => s.text === suggestion.text)
      )
      .slice(0, 8);

    res.json({
      suggestions: uniqueSuggestions,
      query: query,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// AI chat assistant
router.post("/chat", (req, res) => {
  try {
    const { message, context } = req.body;

    // Simulate AI chat response
    let response = "";
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("product") || lowerMessage.includes("item")) {
      response =
        "I'd be happy to help you find products! Could you tell me what type of item you're looking for? We have electronics, clothing, footwear, and accessories available.";
    } else if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost")
    ) {
      response =
        "Our products are competitively priced with frequent discounts. You can use filters on the products page to sort by price range. Would you like me to show you our current deals?";
    } else if (
      lowerMessage.includes("shipping") ||
      lowerMessage.includes("delivery")
    ) {
      response =
        "We offer free shipping on orders over ₹1000. Standard delivery takes 3-5 business days, and express delivery is available for next-day delivery. Would you like more details about shipping options?";
    } else if (
      lowerMessage.includes("return") ||
      lowerMessage.includes("exchange")
    ) {
      response =
        "We have a 30-day return policy for all items. Items must be in original condition with tags attached. Returns are free and can be initiated from your account. Need help with a specific return?";
    } else if (
      lowerMessage.includes("recommend") ||
      lowerMessage.includes("suggest")
    ) {
      const topProducts = products
        .filter((p) => p.rating >= 4.5)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

      response = `Based on popularity and ratings, I'd recommend: ${topProducts
        .map((p) => p.name)
        .join(
          ", "
        )}. These are highly rated and trending! What's your budget range?`;
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      response =
        "Hello! Great to see you here. I'm here to make your shopping experience smooth and enjoyable. What can I help you find today?";
    } else if (
      lowerMessage.includes("discount") ||
      lowerMessage.includes("sale")
    ) {
      response =
        "We currently have great discounts on many items! Check out our electronics section for up to 20% off, and clothing with up to 35% off. I can help you find the best deals in your preferred category.";
    } else {
      response =
        "I understand you're asking about that. While I'm continuously learning, I can help you with product searches, recommendations, pricing, shipping, and returns. Is there a specific product or topic you'd like to explore?";
    }

    res.json({
      response,
      confidence: 0.9,
      suggestions: [
        "Show me trending products",
        "What's your return policy?",
        "Do you have any discounts?",
        "Help me find electronics",
      ],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Smart search with AI enhancement
router.get("/smart-search", (req, res) => {
  try {
    const query = req.query.q?.toLowerCase() || "";

    if (!query) {
      return res.json({ products: [], suggestions: [] });
    }

    // Enhanced search with fuzzy matching and relevance scoring
    const searchResults = products
      .map((product) => {
        let score = 0;

        // Exact name match gets highest score
        if (product.name.toLowerCase().includes(query)) {
          score += 10;
        }

        // Description match
        if (product.description.toLowerCase().includes(query)) {
          score += 5;
        }

        // Category match
        if (product.category.toLowerCase().includes(query)) {
          score += 7;
        }

        // Tags match
        product.tags.forEach((tag) => {
          if (tag.toLowerCase().includes(query)) {
            score += 3;
          }
        });

        // Boost score for highly rated products
        score += product.rating;

        return { ...product, relevanceScore: score };
      })
      .filter((product) => product.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 20);

    res.json({
      products: searchResults,
      totalResults: searchResults.length,
      query: query,
      aiEnhanced: true,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
