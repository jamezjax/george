/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0B0B0E',
          900: '#101014',
          800: '#191920',
          700: '#20202A',
          600: '#2A2A38',
          500: '#38384A'
        },
        generative: {
          violet: '#8B5CF6',
          blue: '#3B82F6',
          cyan: '#22D3EE',
          purple: '#A855F7',
          pink: '#EC4899',
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#A1A1AA',
          muted: '#71717A'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      backgroundImage: {
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #8B5CF6 0deg, #3B82F6 120deg, #22D3EE 240deg, #8B5CF6 360deg)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
