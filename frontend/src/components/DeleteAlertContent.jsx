import React from "react";

const DeleteAlertContent = ({ onDelete, content }) => {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      {/* Uyarı metni */}
      <p className="text-center text-gray-700 text-[14px] font-medium mb-5">
        {content || "Are you sure you want to delete this item?"}
      </p>

      {/* Butonlar */}
      <div className="flex items-center justify-center gap-4">
        {/* Cancel */}
        <button
          className="px-5 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>

        {/* Delete */}
        <button
          className="px-5 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlertContent;
