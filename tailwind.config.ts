import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        secondary: ['Monospace', ...fontFamily.mono],
      },
      colors: {
        primary: {
          100: '#daeffc',
          200: '#b5dffa',
          300: '#8fd0f7',
          400: '#6ac0f5',
          500: '#45b0f2',
          600: '#378dc2',
          700: '#296a91',
          800: '#1c4661',
          900: '#0e2330',
        },
      },
    },
  },
  plugins: [],
};
export default config;
