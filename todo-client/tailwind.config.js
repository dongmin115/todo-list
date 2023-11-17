/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,jsx,js,html}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity : 1},
          '50%': { opacity : 0 },
        }
      },
      animation: {
        blink : 'blink 1s ease-in-out infinite',  //홈페이지랑 양식다름 홈페이지는 blink라고만 써도된다고하는데 실제로는 'blink'로 작성해야적용됨
      }
    },
  },
  plugins: [],
}

