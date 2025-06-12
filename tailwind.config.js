/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b1cc09',
        'bg-color': '#0B1725',
      },
      borderRadius: {
        'primary': '22px',
      },
      boxShadow: {
        'primary': '0px -11.295px 25.1px 0px rgba(1, 102, 152, 0.1), 0px 46.434px 46.434px 0px rgba(1, 102, 152, 0.09), 0px 11.295px 25.1px 0px rgba(1, 102, 152, 0.1)',
      },
      animation: {
        'spin': 'spin 2s linear infinite',
      },
      spacing: {
        '68': '17rem',
        '90': '22.5rem',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}