import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      {/* Başlık kısmı */}
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>

      {/* Paragraf kısmı */}
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-11/12"></div>
        <div className="h-3 bg-gray-200 rounded w-10/12"></div>
      </div>

      {/* Alt kısım */}
      <div className="mt-6 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-8/12"></div>
        <div className="h-3 bg-gray-200 rounded w-9/12"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
