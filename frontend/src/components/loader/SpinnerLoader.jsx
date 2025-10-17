import React from "react";

const SpinnerLoader = () => {
  return (
    <div
      className="inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"
      role="status"
    />
  );
};

export default SpinnerLoader;
