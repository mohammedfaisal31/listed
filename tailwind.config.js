module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
              'custom': '2.225rem',  // Custom Font Size
              'custom-for-bar': '1.8rem',  // Custom Font Size
              'custom-for-search-bar': '1.2rem',  // Custom Font Size
              'custom-for-search-bar-icons': '1.5rem',  // Custom Font Size
              'custom-for-revenue': '2.2rem',  // Custom Font Size
            },
            borderRadius: {
                'xl-2': '2rem'
            },
            height: {
              'chart': '24rem', // Custom height class: h-96 will be 24rem
            },
            fontFamily: {
              dashboard: ['Orbitron', 'sans-serif'],
              navbar:['Quicksand','sans-serif']
            },
          }
    },
    plugins: [],
  };
  