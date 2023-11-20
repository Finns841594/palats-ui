/** @type {import('tailwindcss').Config} */
import { GlobalToken } from './tokens/GlobalToken';
import { SemanticToken } from './tokens/SemanticToken';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      background: {
        button: {
          primary: '#7c88fd',
          600: '#493fec',
          hover: '#ff0000',
        },
      },
      green: { 400: '#00ff00', 600: '#00ee00' },
    },

    plugins: [],
  },
};

// const importedColors = SemanticToken.color.background;
// console.log(
//   Object.values(importedColors).map(({ key, value }) => {
//     const color = value.split('-')[0];
//     const number = value.split('-')[1];
//     // const result = GlobalToken.find(({ key, value }) => key === color).number
//     return [key, GlobalToken.colors[color][number]];
//   })
// );
