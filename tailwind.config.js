/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}', // Include custom styles if needed
  ],
  important: true,
  important: '#tailwind',// Make Tailwind classes globally important
  theme: {
    extend: {},
  },
  plugins: [],
};
