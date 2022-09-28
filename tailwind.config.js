const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        mainColor: '#FD5A5A',
        halfTrans: 'rgba(255,255,255,0.5)',
        hero1: '#FAAEB2',
        hero2: '#78A7DA',
        hero3: '#E9967A',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      boxShadow: {
        card: '0 1px 10px 0 hsla(210, 7%, 22%, .06), 0 2px 4px 0 hsla(210, 7%, 22%, .08)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    backgroundImage: {
      'app-pattern': "url('../src/assets/icons/Sprinkle.svg')",
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          transition: '0.75s ease all',
        },
        '.btn-main': {
          backgroundColor: '#FD5A5A',
          color: '#fff',
        },
        '.btn-gradient': {
          background: 'linear-gradient(to right, #FD5A5A,#FD5A5A, #f5af19)',
          color: '#fff',
          backgroundSize: '200%',
          backgroundPosition: 'left',
          '&:hover': {
            backgroundPosition: 'right',
          },
          '&:focus': {
            backgroundPosition: 'right',
          },
        },
        '.border-1-black': {
          border: '1px solid black',
        },
        '.grid-200': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
          gap: '2rem',
        },
        '.transition-500': {
          transition: 'all 0.5s linear',
        },
        '.pill': {
          borderRadius: '9999px',
        },
        // '.text-shadow-1': {
        //   textShadow: '20px 20px 20px #FF0000',
        // },
      });
    }),
  ],
};
