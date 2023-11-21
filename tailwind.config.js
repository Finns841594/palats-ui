/** @type {import('tailwindcss').Config} */
import { SemanticToken } from './tokens/SemanticToken';

module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./stories/**/*.{js,ts,jsx,tsx}",
  './src/**/*.{js,jsx,ts,tsx}'],
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
