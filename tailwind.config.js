module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D74DA',
        'gray-black': '#010101',
        'grey-black': '#010101',
        'sonic-silver': '#747474',
        success: '#2D9CDB',
        info: '#2D9CDB',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1792px',
    },
  },
  plugins: []
}