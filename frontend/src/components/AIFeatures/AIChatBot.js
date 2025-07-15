import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiSend, FiUser } from "react-icons/fi";

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi! I'm your AI shopping assistant. I can help you find products, answer questions, and provide personalized recommendations. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = async (userMessage) => {
    setIsTyping(true);

    // Simulate AI processing delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000)
    );

    let response = "";
    const lowerMessage = userMessage.toLowerCase();

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
      response =
        "Based on popular items and customer reviews, I'd recommend checking out our Premium Running Shoes, Luxury Smart Watch, and Wireless Headphones. These are trending and highly rated! What's your budget range?";
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

    setIsTyping(false);

    const newMessage = {
      id: Date.now(),
      type: "bot",
      text: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    await simulateAIResponse(inputMessage);
  };

  const quickQuestions = [
    "Show me trending products",
    "What's your return policy?",
    "Do you have any discounts?",
    "Help me find electronics",
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 p-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <FiMessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <FiMessageCircle className="text-white" size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    AI Assistant
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.type === "user"
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === "bot" && (
                        <FiMessageCircle
                          className="text-primary-600 dark:text-primary-400 mt-0.5"
                          size={14}
                        />
                      )}
                      {message.type === "user" && (
                        <FiUser className="text-white mt-0.5" size={14} />
                      )}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                    <div className="flex items-center space-x-1">
                      <FiMessageCircle
                        className="text-primary-600 dark:text-primary-400"
                        size={14}
                      />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Quick questions:
                </p>
                <div className="space-y-1">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left text-xs p-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="p-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <FiSend size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBot;
