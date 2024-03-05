module.exports = {
  darkMode: 'class',
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      dropShadow: {
        'full-black': '0px 0px 10px rgba(0, 0, 0, 0.25)',
        'full-white': '0px 0px 10px rgba(255, 255, 255, 1)',
      },

      spacing: {
        '76': '304px',
      },
      colors: {
        'dark-blue' : '#0A2472',
        'grey': '#444444',
        'very-dark-blue': '#03002e',
      },

      keyframes: {
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
