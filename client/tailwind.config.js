/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'bg-color-change': 'bg-color-change 5s infinite',
      },
      keyframes: {
        'bg-color-change': {
          '0%, 100%': { backgroundColor: '#2a2d36' },
          '25%': { backgroundColor: '#181a20' }, 
          '50%': { backgroundColor: '#001F3F' }, 
          '75%': { backgroundColor: '#181a20' }, 
        },
      },
    },
  },
  plugins: [],
};
