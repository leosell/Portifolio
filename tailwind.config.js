/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo-leo': "url('./assets/Reactangle\ 1.png')"
      },

      height: {
        "tamanho-main": "857px"
      },

      colors: {
        'cinza': '#A8ADAD'
      }
    },
  },
  plugins: [],
}
