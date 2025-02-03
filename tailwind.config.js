/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#DF2935",
        green: "#0CF574",
        cyan: {
          400: "#38BDF8",
          500: "#0EA5E9",
          800: "#3B82F6",
          900: "#316AC9",
        },
      },
    },
  },
  plugins: [],
};
