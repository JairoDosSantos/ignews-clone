module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['roboto', 'sans-serif']
            },
            colors:{
              blackbg:'#121414',
              headerBorderBottom:'#29292E',
              headtitleDisable:'#A8A8B3',
              orangeNews:'#EBA417',
              btnLogin:'#1F2729'
            }
        },
        plugins: []
    }
}
