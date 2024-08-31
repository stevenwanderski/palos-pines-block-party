/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      title: ['"Paytone One"'],
      sans: ['Inter']
    },
    backgroundImage: {
      hero: "url('/images/hero-bg.png')"
    },
    extend: {
      colors: {
        green: '#4F7034',
        white: '#FFFFFF',
        black: '#000000'
      }
    },
  },
  plugins: [],
}
