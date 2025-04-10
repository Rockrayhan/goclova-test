/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      // "lemonade",
      {
        mytheme: {
          // ...require("daisyui/src/theming/themes")["light"],
          primary: "#1D242B",
          secondary: "#0077C0",
          "--third": "#C7EEFF",
          "--forth": "#FAFAFA",
        },
      },
    ], 
  },


}

