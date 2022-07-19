module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
         'adelia': ["ADELIA", "cursive"],
      },
      screens: {
        'sm': '500px',
        // => @media (min-width: 640px) { ... } 
    
        'md': '768px',
        // => @media (min-width: 768px) { ... }
    
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
    
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}