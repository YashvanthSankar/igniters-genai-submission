import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiTarget, FiHeart, FiTrendingUp } from "react-icons/fi";

const About = () => {
  const features = [
    {
      icon: FiUsers,
      title: "Customer-Centric",
      description:
        "We put our customers first, ensuring exceptional service and support at every step.",
    },
    {
      icon: FiTarget,
      title: "Quality Products",
      description:
        "Curated selection of premium products that meet our high standards for quality.",
    },
    {
      icon: FiHeart,
      title: "Passion for Excellence",
      description:
        "We are passionate about delivering the best shopping experience possible.",
    },
    {
      icon: FiTrendingUp,
      title: "Innovation",
      description:
        "Leveraging AI and modern technology to enhance your shopping journey.",
    },
  ];

  const team = [
    {
      name: "AI Assistant",
      role: "Product Curator",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "AI-powered product recommendation and curation system.",
    },
    {
      name: "GenAI Team",
      role: "Development Team",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b86f6704?w=300&h=300&fit=crop&crop=face",
      description: "Innovative developers using cutting-edge AI technology.",
    },
    {
      name: "Support Bot",
      role: "Customer Support",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "AI-powered customer support for instant assistance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AuraMarket
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              We're revolutionizing online shopping with AI-powered
              recommendations and exceptional customer service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                AuraMarket was born from the vision of creating a smarter, more
                personalized shopping experience. We believe that technology
                should enhance human decision-making, not replace it.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                Using cutting-edge AI technology, we've built a platform that
                understands your preferences, learns from your behavior, and
                provides recommendations that truly matter to you.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                This project was developed during a 24-hour hackathon,
                showcasing how Generative AI can transform traditional
                e-commerce into something extraordinary.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our core values and features that set us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon
                    className="text-primary-600 dark:text-primary-400"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our AI-Powered Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The technology and people behind AuraMarket
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white p-2 rounded-full">
                    🤖
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Built with Generative AI
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              This entire platform was developed using AI tools including
              ChatGPT, GitHub Copilot, and other generative AI technologies to
              create a modern, responsive, and intelligent shopping experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-2">🤖</div>
                <h3 className="text-lg font-semibold mb-2">
                  AI-Generated Code
                </h3>
                <p className="text-gray-200">
                  Frontend, backend, and components built with AI assistance
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="text-lg font-semibold mb-2">
                  AI-Enhanced Design
                </h3>
                <p className="text-gray-200">
                  Modern UI/UX created with AI-powered design tools
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔍</div>
                <h3 className="text-lg font-semibold mb-2">Smart Features</h3>
                <p className="text-gray-200">
                  Intelligent search, recommendations, and chat assistance
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
