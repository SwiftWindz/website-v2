/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
    extend: {
      'animation': {
        'text':'text 5s ease infinite',
      },
      'keyframes': {
          'text': {
              '0%, 100%': {
                'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
      },
      fontFamily: {
        code: "'Fira Code', sans-serif",
      }
    },
  },
  plugins: [],
}

