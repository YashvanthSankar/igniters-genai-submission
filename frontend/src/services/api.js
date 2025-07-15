import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("auramarket_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("auramarket_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const apiService = {
  // Product APIs
  getProducts: async (params = {}) => {
    const response = await apiClient.get("/products", { params });
    return response.data;
  },

  getProductById: async (id) => {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  },

  searchProducts: async (query) => {
    const response = await apiClient.get("/products/search", {
      params: { q: query },
    });
    return response.data;
  },

  getProductsByCategory: async (category) => {
    const response = await apiClient.get(`/products/category/${category}`);
    return response.data;
  },

  getFeaturedProducts: async () => {
    const response = await apiClient.get("/products/featured");
    return response.data;
  },

  getTrendingProducts: async () => {
    const response = await apiClient.get("/products/trending");
    return response.data;
  },

  // AI Features
  getAIRecommendations: async (userId, productId) => {
    const response = await apiClient.post("/ai/recommendations", {
      userId,
      productId,
    });
    return response.data;
  },

  getAISearchSuggestions: async (query) => {
    const response = await apiClient.get("/ai/search-suggestions", {
      params: { q: query },
    });
    return response.data;
  },

  sendAIChatMessage: async (message, context) => {
    const response = await apiClient.post("/ai/chat", { message, context });
    return response.data;
  },

  // Categories
  getCategories: async () => {
    const response = await apiClient.get("/categories");
    return response.data;
  },

  // User APIs (for future implementation)
  register: async (userData) => {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
  },

  logout: async () => {
    const response = await apiClient.post("/auth/logout");
    return response.data;
  },

  // Orders (for future implementation)
  createOrder: async (orderData) => {
    const response = await apiClient.post("/orders", orderData);
    return response.data;
  },

  getOrders: async () => {
    const response = await apiClient.get("/orders");
    return response.data;
  },

  // Reviews
  getProductReviews: async (productId) => {
    const response = await apiClient.get(`/products/${productId}/reviews`);
    return response.data;
  },

  addProductReview: async (productId, reviewData) => {
    const response = await apiClient.post(
      `/products/${productId}/reviews`,
      reviewData
    );
    return response.data;
  },

  // Wishlist (for future implementation)
  getWishlist: async () => {
    const response = await apiClient.get("/wishlist");
    return response.data;
  },

  addToWishlist: async (productId) => {
    const response = await apiClient.post("/wishlist", { productId });
    return response.data;
  },

  removeFromWishlist: async (productId) => {
    const response = await apiClient.delete(`/wishlist/${productId}`);
    return response.data;
  },
};

export default apiService;
