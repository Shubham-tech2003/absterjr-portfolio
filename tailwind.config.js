/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5D5DDC",
          50: "#F4F4FD",
          100: "#E3E3F9",
          200: "#C2C2F2",
          300: "#A0A0EA",
          400: "#2F2FD2",
          500: "#5D5DDC",
          600: "#2F2FD2",
          700: "#2424A5",
          800: "#1A1A77",
          900: "#101049",
          950: "#0B0B32",
        },
      },
    },
  },
  plugins: [],
};
