/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22C55E',
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        lime: {
          point: '#A3E635',
          soft: '#ECFCCB',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Pretendard Variable', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(34, 197, 94, 0.18)',
        card: '0 12px 36px -14px rgba(16, 24, 40, 0.12)',
        glow: '0 18px 50px -16px rgba(34, 197, 94, 0.45)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        ringbell: {
          '0%, 20%, 100%': { transform: 'rotate(0deg)' },
          '4%, 12%': { transform: 'rotate(-13deg)' },
          '8%, 16%': { transform: 'rotate(13deg)' },
        },
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        ringbell: 'ringbell 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
