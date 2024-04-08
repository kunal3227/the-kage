/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
        }
      },
      colors:{
        secondary:'#ff9c01',
        primary:{
          1: '#CDA95D',
          2: '#ffc001',
        }
      }

    },
    
  },
  plugins: [],
}

