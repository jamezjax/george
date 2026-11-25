/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF9F6',
          100: '#F7F7F4',
          200: '#EFEFEA',
          300: '#E5E5DE'
        },
        charcoal: {
          800: '#2A2C30',
          900: '#202124',
          950: '#141517'
        },
        navy: {
          700: '#324A67',
          800: '#263B53',
          900: '#1B2A3C',
          950: '#121C28'
        },
        gold: {
          400: '#DFB76C',
          500: '#C59B3F',
          600: '#A9812E'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        ultra: '0.3em'
      }
    },
  },
  plugins: [],
}
