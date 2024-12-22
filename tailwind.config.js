/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#0067Ff',
        yellowColor: '#FEB60D',
        purpleColor: '#9771FF',
        irisBlueColor: '#01B5C5',
        headingColor: '#e4f1fe',
        textColor: '#9ea2a7',
      },

      boxShadow: {
        panelShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;',
      },
      // dropShadow: {
      //   custom: '0 0px 1px #0067FF',
      // },
    },
  },
  plugins: [],
}
