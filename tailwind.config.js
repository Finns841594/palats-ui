/** @type {import('tailwindcss').Config} */
import { SemanticToken } from './tokens/SemanticToken';
import { toFlatObject } from './utils/toFlatObject';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /^(.*?)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
  theme: {
    extend: {
      boxShadow: SemanticToken.shadow
    },
    colors: SemanticToken.color,
    fontFamily: {
      'sans': [SemanticToken.font.fontFamily, "Roboto"],
    },
    fontSize: toFlatObject(SemanticToken.font.fontSize),
    plugins: [],
  },
};