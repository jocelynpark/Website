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
        sm: { max: '800px' }
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
        'graygreen': '#5D6D68'
      },
    },
  },
  plugins: [],
}

