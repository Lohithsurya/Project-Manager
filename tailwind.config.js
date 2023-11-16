/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1d4ede',
        'black': '#000',
        'lightblack':'#687591',
        'gg':'#E4E9EF',
        'semiGrey':'#344054',
        'headerblack': '#0E1218',
        'textgrey':'#4D4D4D',
        'lightwhite':'#F3F5F7',
        'lightGrey': '#d0d5dd',
        'teal': '#4fa0cc',
        'lightblue':'#D9E2FF',
        'grey': '#494949',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
