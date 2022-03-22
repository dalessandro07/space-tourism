module.exports = {
    content: ['./index.html', './src/**/*.{react,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(100%)' },
                    '80%': { transform: 'translateX(0%)' },
                    '90%': { transform: 'translateX(1.5%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                slideOut: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            animation: {
                slide: 'slide 1s ease-in-out 1',
                slideOut: 'slideOut 1s ease-in-out 1',
            },
        },
        fontFamily: {
            barlow: ['"Barlow Condensed"', '"sans serif"'],
        },
    },
    plugins: [],
};
