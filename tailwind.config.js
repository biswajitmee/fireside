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
      fontFamily: {
        InterTight: ['InterTight', 'sans-serif'],
        InterTight2: ['InterTight2', 'serif'],
        IvyOraheadline: ['IvyOraheadline', 'sans-serif'],
        IvyOraheadline2: ['IvyOraheadline2', 'sans-serif'],
        IvyOraheadline3: ['IvyOraheadline3', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

