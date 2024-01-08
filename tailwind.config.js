/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {},
    colors: {
      // ...
      tahiti: {
        light: '#000',
        DEFAULT: '#000',
        dark: '#96d0ff',
        heed: '#a9b9ca',
        bio: '#a9b9ca',
        title: '#82aaff',
        name: '#96d0ff',
        menu: '#ce78b0',
        footer: '#ce78b0',
      },
      // ...
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
