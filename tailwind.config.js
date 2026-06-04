/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#050816',
        panel: '#0b1024',
        cyan: '#20f1ff',
        violet: '#8b5cf6',
        electric: '#38bdf8',
      },
      boxShadow: {
        glow: '0 0 35px rgba(32, 241, 255, 0.22)',
        violet: '0 0 36px rgba(139, 92, 246, 0.24)',
      },
      backgroundImage: {
        'aurora-line':
          'linear-gradient(90deg, rgba(32,241,255,.85), rgba(139,92,246,.9), rgba(56,189,248,.85))',
      },
      animation: {
        shimmer: 'shimmer 8s ease-in-out infinite alternate',
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translate3d(-2%, -1%, 0) scale(1)' },
          '100%': { transform: 'translate3d(2%, 1%, 0) scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '.6', filter: 'blur(0)' },
          '50%': { opacity: '1', filter: 'blur(2px)' },
        },
      },
    },
  },
  plugins: [],
};
