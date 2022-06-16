module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#039BF0',
        primary_hover: '#0993e0',
        'custom-gray': '#606060',
        'custom-gray-two': '#CCCCCC',
        'custom-gray-three': '#1A1619',
        'custom-gray-four': '#ABA7AF',
        'custom-gray-five': '#333333',
        'sonic-silver': '#747474',
        'custom-dark-purple': '#4B3A5A',
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