/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(15, 23, 42, 0.06)',
        'glass-lg': '0 20px 50px rgba(15, 23, 42, 0.09)',
      },
    },
  },
  plugins: [],
}

