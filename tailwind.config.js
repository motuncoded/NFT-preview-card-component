/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    colors:{
      "softblue": "var(--softblue)",
      "cyan": "var(--cyan)",
      "white": "var(--white)",
      "main": "hsl(217, 54%, 11%)",
"card": "hsl(216, 50%, 16%)",
"dark-blue": "hsl(215, 32%, 27%)"


    },
    width: {
      '1440': '348px',
      "375": "320px"
    },
    extend: {
      

    },
  },
  plugins: [],
}