module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '380px' ,
        '2xs' : '500px' ,
        '3xs' : '580px',
        'sm': '640px',
        'md': '768px',
        'ex' : '850px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl' :'1536px'
      },
    },
  },
  plugins: [],
}