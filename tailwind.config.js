/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        fraunces: "Fraunces, sans-serif",
      },
      letterSpacing: {
        "extra-wide": "0.2em",
        "extra-wider": "0.3em",
        "extra-widest": "0.4em",
      },
      screens: {
        xs: "360px",
        "2xs": "300px"
      },
    },
  },
  plugins: [],
};
