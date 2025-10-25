/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme (default)
        'dark-bg': '#0B0B0C',
        'dark-fg': '#EAEAEA',
        'dark-border': '#232323',
        'dark-accent': '#C8A45D',
        // OLED theme
        'oled-bg': '#000000',
        'oled-fg': '#EAEAEA',
        'oled-border': '#1A1A1A',
        'oled-accent': '#C8A45D',
        // Light theme
        'light-bg': '#FFFFFF',
        'light-fg': '#111111',
        'light-border': '#EAEAEA',
        'light-accent': '#9C7A3B',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '16': '4rem',
        '24': '6rem',
      },
    },
  },
  plugins: [],
}
