/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./src/**/*.{js}"],
  theme: {
    extend: {
      fontFamily: {
				comic: ['Comic Neue', 'cursive'],
			}
    },
  },
  plugins: [],
}

