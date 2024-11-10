module.exports = {
  content: ["./index.html", "./input.css","./about.html"],
  theme: {
    extend: {
      fontFamily: {
        'PoetsenOne': ['"Poetsen One"', 'sans-serif'],
        'Poppins': ['"Poppins"']

      },
      colors: {
        'granate': '#190509',
        'azulclaro': '#024959',
        'marroncard': '#1C140F',
        'btn1': '#B000DC',
        'btn2': '#DC4200',
        'btn3': '#00DC8D',
        'link': '#E47500'
        


      },

      gridTemplateColumns: {
        'footer': '3fr 1fr 2fr 2fr'
      }
    },
  },
  plugins: [],
}
