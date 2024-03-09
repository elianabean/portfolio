module.exports = {
  darkMode: 'class',
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      dropShadow: {
        'full-black': '0px 0px 10px rgba(0, 0, 0, 0.25)',
        'full-white': '0px 0px 12px rgba(255, 255, 255, 0.4)',
      },

      spacing: {
        '76': '304px',
      },
      colors: {
        'dark-blue' : '#0e1b95',
        'grey': '#444444',
        'very-dark-blue': '#03002e',
        'yellow2': '#e6a129',
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          }, 
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          }, 
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }, 
        },

        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-3deg)'
            },
            '50%': {
                transform: 'rotate(3deg)'
            },
        },

        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-30px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },

      floating: {
        '0%, 100%': {
          transform: 'translateY(0)'
        },
        '50%': {
            transform: 'translateY(-10px)'
        },
      },

      expand: {
        '0%': {
          width: '0'
        },
        '100%': {
            width: '100%'
        },
      },

      drawBorder: {
        to: {
          strokeDashoffset: '1000'
        },
      },
    },
    animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': '1.5s fade-in-down ease-out',
        'fade-in-down2': '1s fade-in-down ease-out',
        'fade-in-down3': '3s fade-in-down ease-out',
        floating: '4s floating 3s infinite',
        floating2: '4s floating 3.5s infinite',
        expand: '2s expand',
        blob: "blob 7s infinite",
        },

      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }, 

      width: {
        '92': '23rem',
        '128': '32rem',
      }

      
    },
  },
  plugins: [
    require('autoprefixer')
  ],
}
