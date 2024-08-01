const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'page-bg': `url('${path.resolve(
          __dirname,
          'src/assets/page-bg.png',
        )}')`,
      },
    },
  },
  plugins: [],
};
