// Enhanced product data with proper descriptions, images, and categories
export const products = [
  {
    id: "product1",
    name: "Premium Running Shoes",
    description:
      "Comfortable and durable running shoes with advanced cushioning technology. Perfect for daily workouts and long-distance running.",
    price: 2999,
    originalPrice: 3499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    category: "footwear",
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    features: ["Breathable mesh", "Cushioned sole", "Lightweight design"],
    colors: ["black", "white", "blue"],
    sizes: ["7", "8", "9", "10", "11"],
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Amazing shoes! Very comfortable for long runs.",
        date: "2024-01-15",
        helpful: 12,
      },
      {
        id: 2,
        user: "Sarah Smith",
        rating: 4,
        comment: "Great quality and good value for money.",
        date: "2024-01-10",
        helpful: 8,
      },
      {
        id: 3,
        user: "Mike Johnson",
        rating: 4,
        comment: "Comfortable but sizing runs a bit large.",
        date: "2024-01-05",
        helpful: 5,
      },
    ],
  },
  {
    id: "product2",
    name: "Stylish Baseball Cap",
    description:
      "Classic baseball cap made from premium cotton with adjustable strap. Perfect for casual wear and outdoor activities.",
    price: 899,
    originalPrice: 1199,
    image:
      "https://images.unsplash.com/photo-1575428652377-a36ac5be3c6c?w=400&h=300&fit=crop",
    category: "accessories",
    inStock: true,
    rating: 4.2,
    reviewCount: 89,
    features: ["Adjustable strap", "Cotton material", "UV protection"],
    colors: ["black", "navy", "red"],
    sizes: ["one-size"],
    reviews: [
      {
        id: 1,
        user: "Alex Wilson",
        rating: 4,
        comment: "Good quality cap, fits well and looks great.",
        date: "2024-01-12",
        helpful: 6,
      },
      {
        id: 2,
        user: "Emma Davis",
        rating: 5,
        comment: "Perfect for sunny days. Love the style!",
        date: "2024-01-08",
        helpful: 9,
      },
    ],
  },
  {
    id: "product3",
    name: "Luxury Smart Watch",
    description:
      "Advanced smartwatch with health monitoring, GPS tracking, and long battery life. Stay connected and track your fitness goals.",
    price: 15999,
    originalPrice: 18999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    category: "electronics",
    inStock: true,
    rating: 4.8,
    reviewCount: 256,
    features: [
      "Heart rate monitor",
      "GPS tracking",
      "Waterproof",
      "7-day battery",
    ],
    colors: ["silver", "black", "gold"],
    sizes: ["42mm", "46mm"],
    reviews: [
      {
        id: 1,
        user: "Tech Enthusiast",
        rating: 5,
        comment:
          "Amazing smartwatch! The battery life is incredible and the health tracking is very accurate.",
        date: "2024-01-20",
        helpful: 15,
      },
      {
        id: 2,
        user: "Fitness Lover",
        rating: 4,
        comment: "Great for tracking workouts. GPS is very precise.",
        date: "2024-01-18",
        helpful: 11,
      },
    ],
  },
  {
    id: "product4",
    name: "Travel Backpack Pro",
    description:
      "Spacious and durable backpack with multiple compartments. Perfect for travel, work, and outdoor adventures.",
    price: 3499,
    originalPrice: 4299,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    category: "bags",
    inStock: true,
    rating: 4.6,
    reviewCount: 174,
    features: ["Water-resistant", "Laptop compartment", "Ergonomic design"],
    colors: ["black", "gray", "navy"],
    sizes: ["25L", "35L", "45L"],
    reviews: [
      {
        id: 1,
        user: "Travel Blogger",
        rating: 5,
        comment:
          "Perfect for travel! So many compartments and very comfortable to carry.",
        date: "2024-01-16",
        helpful: 18,
      },
      {
        id: 2,
        user: "Student",
        rating: 4,
        comment:
          "Great for school. Fits my laptop perfectly and has room for books.",
        date: "2024-01-14",
        helpful: 7,
      },
    ],
  },
  {
    id: "product5",
    name: "Polarized Sunglasses",
    description:
      "Premium polarized sunglasses with UV protection and stylish design. Perfect for driving and outdoor activities.",
    price: 1999,
    originalPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
    category: "accessories",
    inStock: true,
    rating: 4.4,
    reviewCount: 92,
    features: ["Polarized lenses", "UV protection", "Lightweight frame"],
    colors: ["black", "brown", "silver"],
    sizes: ["one-size"],
    reviews: [
      {
        id: 1,
        user: "Driver",
        rating: 4,
        comment: "Great sunglasses for driving. Really cuts down on glare.",
        date: "2024-01-13",
        helpful: 9,
      },
      {
        id: 2,
        user: "Outdoor Enthusiast",
        rating: 5,
        comment: "Perfect for hiking and outdoor activities. Very comfortable.",
        date: "2024-01-11",
        helpful: 12,
      },
    ],
  },
  {
    id: "product6",
    name: "Premium Cotton T-Shirt",
    description:
      "Soft and comfortable cotton t-shirt with modern fit. Perfect for casual wear and everyday comfort.",
    price: 1299,
    originalPrice: 1599,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    category: "clothing",
    inStock: true,
    rating: 4.3,
    reviewCount: 143,
    features: ["100% cotton", "Pre-shrunk", "Breathable fabric"],
    colors: ["white", "black", "gray", "navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    reviews: [
      {
        id: 1,
        user: "Fashion Lover",
        rating: 4,
        comment: "Really soft and comfortable cotton. True to size.",
        date: "2024-01-09",
        helpful: 6,
      },
      {
        id: 2,
        user: "Daily Wearer",
        rating: 5,
        comment: "Perfect for everyday wear. Washes well and keeps its shape.",
        date: "2024-01-07",
        helpful: 8,
      },
    ],
  },
  {
    id: "product7",
    name: "Gaming Laptop Pro",
    description:
      "High-performance gaming laptop with latest processor and graphics card. Perfect for gaming and professional work.",
    price: 85999,
    originalPrice: 94999,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    category: "electronics",
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
    features: ["Intel i7 processor", "RTX 3060 GPU", "16GB RAM", "512GB SSD"],
    colors: ["black"],
    sizes: ["15.6-inch"],
    reviews: [
      {
        id: 1,
        user: "Gamer",
        rating: 5,
        comment:
          "Excellent performance for gaming. RTX 3060 handles everything I throw at it.",
        date: "2024-01-06",
        helpful: 14,
      },
      {
        id: 2,
        user: "Developer",
        rating: 4,
        comment: "Great for coding and development work. Fast and reliable.",
        date: "2024-01-04",
        helpful: 10,
      },
    ],
  },
  {
    id: "product8",
    name: "Flagship Smartphone",
    description:
      "Latest smartphone with advanced camera system and fast performance. Stay connected with cutting-edge technology.",
    price: 49999,
    originalPrice: 54999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    category: "electronics",
    inStock: true,
    rating: 4.6,
    reviewCount: 312,
    features: [
      "Triple camera",
      "5G connectivity",
      "Fast charging",
      "128GB storage",
    ],
    colors: ["black", "blue", "silver"],
    sizes: ["6.1-inch"],
    reviews: [
      {
        id: 1,
        user: "Tech Reviewer",
        rating: 5,
        comment:
          "Camera quality is outstanding. 5G connectivity is super fast.",
        date: "2024-01-03",
        helpful: 20,
      },
      {
        id: 2,
        user: "Mobile User",
        rating: 4,
        comment: "Great phone overall. Battery life could be better.",
        date: "2024-01-01",
        helpful: 13,
      },
    ],
  },
  {
    id: "product9",
    name: "Professional Camera",
    description:
      "DSLR camera with high-resolution sensor and versatile lens options. Perfect for photography enthusiasts.",
    price: 45999,
    originalPrice: 52999,
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    category: "electronics",
    inStock: true,
    rating: 4.8,
    reviewCount: 67,
    features: [
      "24MP sensor",
      "4K video",
      "Image stabilization",
      "Weather sealed",
    ],
    colors: ["black"],
    sizes: ["body-only", "with-lens"],
    reviews: [
      {
        id: 1,
        user: "Photographer",
        rating: 5,
        comment:
          "Amazing image quality. The 24MP sensor captures incredible detail.",
        date: "2023-12-30",
        helpful: 22,
      },
      {
        id: 2,
        user: "Hobbyist",
        rating: 4,
        comment: "Great camera for the price. Learning curve but worth it.",
        date: "2023-12-28",
        helpful: 16,
      },
    ],
  },
  {
    id: "product10",
    name: "Wireless Headphones",
    description:
      "Premium wireless headphones with active noise cancellation and superior sound quality. Perfect for music lovers.",
    price: 8999,
    originalPrice: 11999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "electronics",
    inStock: true,
    rating: 4.5,
    reviewCount: 198,
    features: ["Active noise cancellation", "30-hour battery", "Bluetooth 5.0"],
    colors: ["black", "white", "blue"],
    sizes: ["one-size"],
    reviews: [
      {
        id: 1,
        user: "Music Lover",
        rating: 5,
        comment:
          "Best headphones I've ever owned. Noise cancellation is incredible.",
        date: "2023-12-25",
        helpful: 25,
      },
      {
        id: 2,
        user: "Commuter",
        rating: 4,
        comment: "Perfect for daily commute. Battery lasts all day.",
        date: "2023-12-23",
        helpful: 18,
      },
    ],
  },
];

export const categories = [
  { id: "all", name: "All Products", icon: "🛍️" },
  { id: "electronics", name: "Electronics", icon: "📱" },
  { id: "clothing", name: "Clothing", icon: "👕" },
  { id: "footwear", name: "Footwear", icon: "👟" },
  { id: "accessories", name: "Accessories", icon: "👜" },
  { id: "bags", name: "Bags", icon: "🎒" },
];

export const getProductsByCategory = (category) => {
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
};

export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRelatedProducts = (productId, category) => {
  return products
    .filter(
      (product) => product.id !== productId && product.category === category
    )
    .slice(0, 4);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.rating >= 4.5).slice(0, 6);
};

export const getTrendingProducts = () => {
  return products.sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 6);
};
