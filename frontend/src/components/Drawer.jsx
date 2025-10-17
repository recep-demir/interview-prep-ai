import React from "react";
import { LuX } from "react-icons/lu";

const Drawer = ({ isOpen, onClose, children, title }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto w-full md:w-[30vw] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <h3 className="text-lg font-semibold text-gray-800">
          {title || "Learn More"}
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <LuX size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Drawer;
