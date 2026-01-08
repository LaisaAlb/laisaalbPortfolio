export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#191919',
          light: '#FFFFFF',
        },
        surface: {
          dark: '#120b2f',
          light: '#ffffff',
        },
        primary: {
          DEFAULT: '#8b5cf6',
          hover: '#7c3aed',
        },
        text: {
          dark: '#ffffff',
          light: '#0f172a',
          mutedDark: '#c7c7d1',
          mutedLight: '#475569',
        },
      },
    },
  },
  plugins: [],
}
