const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
    purge: [
      './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
    ],

    // add daisyUI plugin
  plugins: [
    require('daisyui'),
    require('tailwindcss-scroll-snap'),
  ],

  variants: {
		// Add variants as needed
		scrollSnapType: ['responsive'],
	},
	
  // config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          coolGray: colors.coolGray,
          gray: colors.gray,
          lightBlue: colors.lightBlue,
          blue: colors.blue,
          blueGray: colors.blueGray,
          red: colors.red,
          rose: colors.rose,
          pink: colors.fuchsia,
          yellow: colors.yellow,
          amber: colors.amber,
          orange: colors.orange,
          emerald: colors.emerald,
          green: colors.green,
          indigo: colors.indigo,
          purple: colors.violet,
          'regal-blue': '#243c5a',
          'indigo-dark': '#202e78',
          teal: colors.teal,
          cyan: colors.cyan,
          sky: colors.sky,
          lime: colors.lime,
        },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    }
  }
}
  