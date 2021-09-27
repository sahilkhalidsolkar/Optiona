module.exports = {
  
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'primary': '#5db7f9',
        'danger': '#fed1d1',
        'extremedanger': '#f70217',
      },
      placeholderColor: {
       
        'danger': '#fed1d1',
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
          'danger': '#fed1d1',
       }),
       backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#5db7f9',
        
       })

    },
     

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
