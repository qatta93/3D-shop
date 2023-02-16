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
          sans: ['"Roboto"', 'sans-serif'],
         'changa-one': ["Changa One", "cursive"],
         'cormorant': ["Cormorant", "serif"],
         'michroma': ["Michroma", "sans-serif"]
      },
      colors: {
        'primary-light': '#F1F2F8',
        'primary-dark': '#DEE0EA',
        'secondary-light': '#F6DE4C',
        'secondary-medium': '#F6DE4C',
        'secondary-dark': '#E0C623',
        'grey-light': '#BBBBBB',
        'grey-dark': '#4A4B4C',
      },
      backgroundImage: {
        'primary-bcg': "url('/images/bcg-primary.png')",
      },
      screens: {
        'sm': '600px',
        // => @media (min-width: 500px) { ... } 
    
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