import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif TC"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
