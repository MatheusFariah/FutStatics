// frontend/tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',     // Cor dourada
        dark: '#0f0f0f',     // Cor escura de fundo
      },
    },
  },
  plugins: [],
};

export default config;
