/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  gray: {
    350: '#C3C3C3'
  }
  // ...
}
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        pacifico: ['Pacifico', 'serif'],
        breeserif: ['Bree Serif', 'serif'],
      },
      fontSize: {
        base: '18px', // Default font size
        h1: '2.25rem', // Equivalent to text-4xl
        h2: '1.875rem', // Equivalent to text-3xl
        h3: '1.5rem', // Equivalent to text-2xl
        h4: '1.25rem', // Equivalent to text-xl
        h5: '1.125rem', // Equivalent to text-lg
        h6: '1rem', // Equivalent to text-base
      },
      lineHeight: {
        heading: '1', // Default line height
        base: '1.3', // Default line height
      },
      textColor: {
        base: colors.gray['350'], // Default text color
        heading: 'white'
      },
      color: colors,

    },
  },
  plugins: [],
}

