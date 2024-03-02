// Import React
import React from "react";

// Define your component
const StylizedButton = () => {
  // Your component logic goes here

  return (
    <div class="flex justify-center items-center mt-10">
      <div class="relative inline-flex group">
        <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <a
          href="javascript:window.location.href=window.location.href"
          title="Get quote now"
          class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
          onclick="location.reload()"
        >
          Surprise Me
        </a>
      </div>
    </div>
  );
};

// Export your component
export default StylizedButton;
