import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0097b2',
        background: '#f2efe7',
        text: '#000000',
        neutral: {
          50: '#f7f5ef',
          100: '#ede8dc',
          200: '#ded6c0',
          300: '#cfc4a3',
          400: '#b8aa82',
          500: '#9f8f68',
          600: '#7e6f4f',
          700: '#61543b',
          800: '#423728',
          900: '#241d15',
          950: '#120d08'
        }
      },
      fontFamily: {
        display: ['"League Spartan"', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'display-1': [
          'clamp(2.5rem, 6vw, 4rem)',
          { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.01em' }
        ],
        'display-2': [
          'clamp(1.75rem, 4vw, 2.5rem)',
          { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.005em' }
        ],
        'display-3': ['1.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        body: ['1rem', { lineHeight: '1.6' }]
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0, 0, 0, 0.2)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards'
      },
      backgroundImage: {
        'hero-pattern':
          'radial-gradient(circle at 20% 20%, rgba(0, 151, 178, 0.12), transparent 55%), radial-gradient(circle at 80% 10%, rgba(0, 151, 178, 0.08), transparent 45%)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2rem',
          lg: '3rem'
        }
      }
    }
  },
  safelist: ['bg-background', 'text-text'],
  plugins: []
}

export default config
