const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    safelist: [
        '!duration-0',
        '!delay-0',
        'html.js :where([class*="taos:"]:not(.taos-init))'
    ],
    content: {
        transform: (content) => content.replace(/taos:/g, ''),
    },
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                "Poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
            },

            animation: {
                fadeIn: "fadeIn 2s ease-in forwards"
},
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                }
            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('taos/plugin')
        ],
}

