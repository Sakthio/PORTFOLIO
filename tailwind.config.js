/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030305',
          900: '#07070a',
          850: '#0b0c12',
          800: '#10121b',
          700: '#171a27',
          600: '#23283c',
        },
        gold: {
          300: '#f7e7a9',
          400: '#edd57e',
          500: '#d4af37',
          600: '#b89425',
          700: '#8c6e18',
        },
        silver: {
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'liquid-flow': 'liquidFlow 12s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        liquidFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
        'glass-lg': '0 20px 50px -10px rgba(0, 0, 0, 0.7), inset 0 1px 2px 0 rgba(255, 255, 255, 0.15)',
        'glow-gold': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'glow-silver': '0 0 35px -5px rgba(226, 232, 240, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '32px',
        '3xl': '48px',
      }
    },
  },
  plugins: [],
}
