/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // warmer ivory base + terracotta accent (distinct from the gold-on-cream look)
        cream: '#FAF6EF',
        surface: '#F1EADE',
        gold: '#B5683C',          // terracotta primary accent
        'gold-light': '#D29A66',  // warm clay secondary
        'text-primary': '#1C1813',
        'text-secondary': '#6E655A',
      },
      fontFamily: {
        // Fraunces (characterful editorial serif) + Archivo (architectural sans)
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Archivo"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-xl': '0.3em',
        'widest-xxl': '0.5em',
      },
    },
  },
  plugins: [],
}
