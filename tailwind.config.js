/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        spotlight: "url('/src/Assets/Images/bitcoin-abstract 2.svg')",
        cardImage:"url('/src/Assets/Images/Card image.svg')",
        "gradient-custom":
          "linear-gradient(180deg, rgba(9, 28, 35, 0.3) 0%, rgba(8, 64, 82, 0.21) 52.28%, rgba(9, 28, 35, 0.3) 100%)",
      },
    },
  },
  plugins: [],
};
