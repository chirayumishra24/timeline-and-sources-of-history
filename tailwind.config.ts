import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#F8F5EE',
          200: '#EFE9DC',
          300: '#E4DAC6',
          400: '#D5C4A6',
          500: '#C2AA83',
          600: '#A88D61',
        },
        antique: {
          bronze: '#8C6239',
          gold: '#C59B27',
          ink: '#1F2421',
          slate: '#343A40',
          red: '#9E2A2B',
          navy: '#203A43',
        },
      },
      boxShadow: {
        'parchment': '0 4px 20px -2px rgba(92, 64, 40, 0.08), 0 2px 6px -1px rgba(92, 64, 40, 0.06)',
        'parchment-lg': '0 10px 25px -5px rgba(92, 64, 40, 0.12), 0 8px 10px -6px rgba(92, 64, 40, 0.08)',
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.35)',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
