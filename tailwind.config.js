// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        move: 'move 10s infinite alternate',
      },
      keyframes: {
        move: {
          '0%': { transform: 'scale(1) translateY(0)' },
          '100%': { transform: 'scale(1.1) translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
