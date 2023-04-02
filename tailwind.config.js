/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#071311',
      white: '#fff',
      darkGreen: '#11312D',
      green: '#226059',
      lightGreen: '#96DAD2',
      orange: '#F45B0B',
      grey: '#ECECEC',
      lightGrey: '#F5F7F9',
    }
  },
  plugins: [],
}

