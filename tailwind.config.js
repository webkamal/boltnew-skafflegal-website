/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf1df',
          200: '#bae3c1',
          300: '#8fcfa0',
          400: '#5eb77a',
          500: '#3a9f5c',
          600: '#1a7f45',
          700: '#16673a',
          800: '#155230',
          900: '#13442a',
          950: '#0a2717',
        },
        secondary: {
          50: '#fbf7ed',
          100: '#f5ecd3',
          200: '#ead9a6',
          300: '#e0c473',
          400: '#d6ac47',
          500: '#ca942d',
          600: '#b47722',
          700: '#95591d',
          800: '#7a481e',
          900: '#663d1c',
          950: '#3a1f0d',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
};