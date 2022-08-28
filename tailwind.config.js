/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'"],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
