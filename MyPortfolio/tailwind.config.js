/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': '0px 1px 1px rgba(255, 255, 255, 0.56) inset',
        'button-shadow':'0px 2px 1px rgba(255, 255, 255, 0.55) inset',
      },
      colors: {
        "portfolioPrimary": "#0098D0",
        "portfolioSecondary": "#0056B8",
        "portfolioTextDark": "#2a2a2a",
        "portfolioTextLight": "#656560",
        "portfolioStroke": "#CAD0D8",
        "portfolioWhite": "#ffffff",
        "portfolioGradient": "linear-gradient(90deg,#5FD4FF 0%, #0056B8 100% )"
      }
    },
  },
  plugins: [],
}

