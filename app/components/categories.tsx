// Import React
import React from "react";

// Define your component
const Categories = () => {
  // Your component logic goes here

  return (
    <div class="flex justify-center gap-2 flex-wrap p-4">
      <span class="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
        #photography
      </span>
      <span class="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
        #travel
      </span>
      <span class="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
        #winter
      </span>
      <span class="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
        #chill
      </span>
    </div>
  );
};

// Export your component
export default Categories;
