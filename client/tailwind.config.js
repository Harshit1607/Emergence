// tailwind.config.js
export default {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // optional, if you're using the /app folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
