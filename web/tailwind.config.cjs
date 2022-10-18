/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', 'index.html'],
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#141417',
          750: '#1F1F1F',
          250: '#8D8D99',
        },
        
        blue: {
          150: '#7CD7CF',
          250: '#49CCCC',
          350: '#00B4CC',
        }
      },
      keyframes: {
        inEnter: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        inEnter: 'inEnter .1s ease'
      }
    }
  },
  plugins: []
}
