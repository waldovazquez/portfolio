/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        light: '#FFFFFF',
        primary: '#BB86FC'
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)']
      }
    }
  },
  plugins: []
}
