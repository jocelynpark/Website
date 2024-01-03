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
      screens: {
        sm: '640px', // applies from 640px to 799px
        md: '800px', // applies from 800px to 1199px
        lg: '1000px', // applies from 1200px and up
        // Note: You don't need xl or 2xl unless you're using them
      },
      fontFamily: {
        'genera': ['Genera-SemiBold'],
        'inter': ['Inter'],
        'sans': ['sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        'darkbrown': '#2A1804',
        'cream': '#FFFDFA',
        'graygreen': '#5D6D68',
        'sleevepurple': '#5B014D',
        'sleevedarkgreen': '#132A13'
      },
    },
  },
  plugins: [],
}

