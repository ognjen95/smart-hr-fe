/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../packages/ui-components/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: ['dark', 'light'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: 'daisy-',
    darkTheme: 'dark',
  },
  plugins: [require('daisyui')],
};
