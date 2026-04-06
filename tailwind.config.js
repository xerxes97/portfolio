/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        background: '#ffffff',
        surface: '#f8fafc',
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
        },
        accent: '#f59e0b',
        
        // Dark theme colors (automatically applied in dark mode)
        dark: {
          background: '#0f172a',
          surface: '#1e293b',
          text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
          },
        }
      },
    },
  },
  plugins: [],
}
