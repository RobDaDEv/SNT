/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka One', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'turtle-bounce': 'turtleBounce 3s ease-in-out infinite',
        'coin-spin': 'spin 2s linear infinite',
        'progress-shine': 'progressShine 3s ease-in-out infinite',
      },
      keyframes: {
        turtleBounce: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '25%': { transform: 'translateY(-8px) scale(1.02)' },
          '50%': { transform: 'translateY(-15px) scale(1.05)' },
          '75%': { transform: 'translateY(-8px) scale(1.02)' },
        },
        progressShine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}