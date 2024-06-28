/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#E51736",
          secondary: "#CECECE",
          accent: "#EEEEEE",
          neutral: "#FFFFFF",
          "base-100": "#000000", // Very dark grey (almost black)
          info: "#3B82F6", // Blue
          success: "#10B981", // Green
          warning: "#FBBF24", // Bright yellow
          error: "#F87171", // Softer red
          text: "#F3F4F6", // Default text color for dark mode
        },
      },
      {
        dark: {
          primary: "#E51736",
          secondary: "#CECECE",
          accent: "#EEEEEE",
          neutral: "#FFFFFF",
          "base-100": "#000000", // Very dark grey (almost black)
          info: "#3B82F6", // Blue
          success: "#10B981", // Green
          warning: "#FBBF24", // Bright yellow
          error: "#F87171", // Softer red
          text: "#F3F4F6", // Default text color for dark mode
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
