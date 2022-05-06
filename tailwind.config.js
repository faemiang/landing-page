const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  // important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '3xl': { max: '1680px' },
      '2xl': { max: '1440px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xs: { max: '580px' },
      se: { max: '320px' },
    },

    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: '#0A3C6E',
      },

      fontFamily: {
        ...defaultTheme.fontFamily,
        sriracha: `'Sriracha', cursive`,
      },

      aspectRatio: {
        ...defaultTheme.aspectRatio,
        '4/3': '4 / 3',
        '5/3': '5 / 3',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}
