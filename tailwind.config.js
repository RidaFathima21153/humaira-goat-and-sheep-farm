/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          darkGreen: '#1b4332',
          emerald: '#2d6a4f',
          lightGreen: '#52b788',
          accentGreen: '#74c69d',
          paleBeige: '#fdfbf7',
          beige: '#f4f1de',
          brown: '#8d5b4c',
          darkBrown: '#5c3d2e',
          accentBlue: '#0284c7',
          skyBlue: '#38bdf8',
          darkBlue: '#0369a1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
        'glass-hover': '0 12px 40px 0 rgba(27, 67, 50, 0.25)',
        'glow-green': '0 0 25px rgba(45, 106, 79, 0.4)',
        'glow-blue': '0 0 25px rgba(2, 132, 199, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
