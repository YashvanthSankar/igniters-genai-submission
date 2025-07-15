import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="card p-4 h-full animate-pulse">
      <div className="aspect-square w-full bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3"></div>
      <div className="flex items-center mb-3">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded"
            ></div>
          ))}
        </div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-8 ml-2"></div>
      </div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
    </div>
  );
};

export default ProductCardSkeleton;
