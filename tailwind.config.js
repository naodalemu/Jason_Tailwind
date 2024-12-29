/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#5A3D1F",
        "light-brown": "#C09F6A",
        "light-brown-10": "#C09F6A1A",
        "dark-gray": "#778088",
        "light-gray": "#F4F4F5",
        "border-gray": "#E8E8E8",
        "dark-text": "#495560",
        "golden-star": "#FFA432",
        "euro-cyan": "#DDFDE6",
        "euro-text-green": "#245D3A",
      }
    },
  },
  plugins: [],
}

