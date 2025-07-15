import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiThumbsUp, FiUser } from "react-icons/fi";
import toast from "react-hot-toast";

const ReviewsSection = ({ product }) => {
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: "",
    user: "Guest User", // In a real app, this would come from auth context
  });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.comment.trim()) {
      // In a real app, this would make an API call
      toast.success("Review submitted successfully!");
      setNewReview({ rating: 5, comment: "", user: "Guest User" });
      setShowReviewForm(false);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!product?.reviews) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No reviews yet. Be the first to review this product!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Reviews Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Customer Reviews ({product.reviews.length})
        </h3>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Write a Review
        </button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Write Your Review
          </h4>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rating
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="text-2xl focus:outline-none"
                  >
                    <FiStar
                      className={`w-6 h-6 ${
                        star <= newReview.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                  {newReview.rating}/5
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Review
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Share your experience with this product..."
                required
              />
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {product.reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <FiUser
                    className="text-primary-600 dark:text-primary-400"
                    size={16}
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    {review.user}
                  </h5>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(review.date)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {review.comment}
            </p>

            <div className="flex items-center justify-between">
              <button
                onClick={() => toast.success("Thanks for your feedback!")}
                className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <FiThumbsUp size={14} />
                <span className="text-sm">Helpful ({review.helpful})</span>
              </button>

              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span>Verified Purchase</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button (for pagination) */}
      {product.reviews.length > 3 && (
        <div className="text-center">
          <button className="px-6 py-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
