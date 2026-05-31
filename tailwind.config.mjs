/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container": "#e5eeff",
        "surface-container-high": "#dce9ff",
        "surface-container-highest": "#d3e4fe",
        "on-surface": "#0b1c30",
        "on-surface-variant": "#424750",
        "outline-variant": "#c2c7d1",
        "primary": "#205e9b",
        "on-primary": "#ffffff",
        "primary-container": "#4077b6",
        "on-primary-container": "#fdfcff",
        "secondary": "#156b4d",
        "on-secondary": "#ffffff",
        "secondary-container": "#a3f3cd",
        "on-secondary-container": "#1e7153",
        "tertiary": "#825100",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#a36700",
        "on-tertiary-container": "#fffbff",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'ambient': '0 4px 20px -2px rgba(78, 132, 196, 0.08), 0 0 3px rgba(78, 132, 196, 0.04)',
        'deep': '0 12px 32px -4px rgba(78, 132, 196, 0.12), 0 4px 8px -2px rgba(78, 132, 196, 0.08)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'section': '80px',
        'container-max': '1280px',
      }
    },
  },
  plugins: [],
};