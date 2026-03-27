/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        base: "1rem",    // 16px
        sm: "0.875rem",  // 14px
        lg: "1.125rem",  // 18px
        xl: "1.25rem",   // 20px
        "2xl": "1.5rem", // 24px
      },
    },
  },
  plugins: [],
}
