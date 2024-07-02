/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E51736",
        secondary: "#CECECE",
        accent: "#EEEEEE",
        neutral: "#FFFFFF",
        "base-100": "#000000", // Very dark grey (almost black)
        info: "#3B82F6", // Blue
        success: "#10B981", // Green
        warning: "#FBBF24", // Bright yellow
        error: "#F87171", // Softer red
        text: "#F3F4F6",
      },
    },
  },
  plugins: [require("daisyui")],
};
