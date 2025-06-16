// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#b1cc09',
//         'bg-color': '#0B1725',
//       },
//       borderRadius: {
//         'primary': '22px',
//       },
//       boxShadow: {
//         'primary': '0px -11.295px 25.1px 0px rgba(1, 102, 152, 0.1), 0px 46.434px 46.434px 0px rgba(1, 102, 152, 0.09), 0px 11.295px 25.1px 0px rgba(1, 102, 152, 0.1)',
//       },
//       animation: {
//         'spin': 'spin 2s linear infinite',
//       },
//       spacing: {
//         '68': '17rem',
//         '90': '22.5rem',
//       },
//       fontFamily: {
//         'inter': ['Inter', 'sans-serif'],
//         'poppins': ['Poppins', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }


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
        primary: '#7C3AED', // Changed from #b1cc09 to purple
        secondary: '#EC4899', // Added pink secondary
        accent: '#10B981', // Added green accent
        'bg-color': '#0F0F23', // Changed from #0B1725 to darker purple-blue
        'card-bg': '#1E1B4B', // Added card background
        'border-primary': '#6366F1', // Added primary border color
        'text-primary': '#F8FAFC', // Added primary text color
        'text-secondary': '#CBD5E1', // Added secondary text color
      },
      borderRadius: {
        'primary': '22px',
      },
      boxShadow: {
        'primary': '0px -11.295px 25.1px 0px rgba(124, 58, 237, 0.1), 0px 46.434px 46.434px 0px rgba(124, 58, 237, 0.09), 0px 11.295px 25.1px 0px rgba(124, 58, 237, 0.1)',
        'glow': '0 0 20px rgba(124, 58, 237, 0.3)',
      },
      animation: {
        'spin': 'spin 2s linear infinite',
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      spacing: {
        '68': '17rem',
        '90': '22.5rem',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #10B981 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F0F23 0%, #1E1B4B 50%, #312E81 100%)',
      },
    },
  },
  plugins: [],
}