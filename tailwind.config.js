/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custum-purple': 'hsl(259, 100%, 65%)',
        'custum-light-red': 'hsl(0, 100%, 67%)',
        'custum-white': 'hsl(0, 0%, 100%)',
        'custum-off-white': 'hsl(0, 0%, 94%)',
        'custum-light-grey': 'hsl(0, 0%, 86%)',
        'custum-smokey-grey': 'hsl(0, 1%, 44%)',
        'custum-off-black': 'hsl(0, 0%, 8%)'
      },
      fontFamily: { custumFont: ["Poppins", "sans-serif"] },
    },
    fontWeight: { light: "400", semiBold: "700", extraBold: "800" },
  },
  plugins: [],
}
