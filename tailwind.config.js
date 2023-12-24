/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-sans-thai': ["IBM Plex Sans Thai", 'sans-serif'],
      },
      screens: {
        mobile: "640px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
}

