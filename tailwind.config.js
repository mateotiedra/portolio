/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  gray: {
    350: '#C3C3C3'
  }
}
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        pacifico: ['Pacifico', 'serif'],
        breeserif: ['Bree Serif', 'serif'],
      },
      fontSize: {
        base: '20px',
        h1: '2.25rem',
        h2: '1.875rem',
        h3: '1.5rem',
        h4: '1.25rem',
        h5: '1.125rem',
        h6: '1rem',
        '2xs': '0.6rem',
      },
      lineHeight: {
        heading: '1',
        base: '1.3',
      },
      textColor: {
        base: colors.gray['350'],
        heading: 'white',
        primary: 'var(--primary-color)'
      },
      color: colors,
    },
  },
  plugins: [],
}
