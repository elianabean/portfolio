module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      spacing: {
        '76': '304px',
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
    },
    animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': '1.5s fade-in-down ease-out',
        'fade-in-down2': '1s fade-in-down ease-out',
        'fade-in-down3': '4s fade-in-down ease-out',
        floating: '4s floating 2s infinite',
        floating2: '4s floating 2.5s infinite',
    },

      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      }, 

      width: {
        '92': '23rem',
        '128': '32rem',
      }

      
    },
  },
  plugins: [],
}
