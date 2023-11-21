/** @type {import('tailwindcss').Config} */
import { SemanticToken } from './tokens/SemanticToken';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  theme: {
    extend: {},
    colors: SemanticToken.color,
    plugins: [],
  },
};
