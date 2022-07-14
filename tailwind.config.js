/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend:{
        colors:{
          custom_green: '#08FFC8',
          custom_light_gray: '#FFF7F7',
          custom_darker_gray: '#DADADA',
          custom_slate: '#204969',
        }
      }
    },
  },
  plugins: [],
}
