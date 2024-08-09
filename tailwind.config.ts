import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#000000', 
        darkText: '#ffffff', 
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;