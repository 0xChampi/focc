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
        fontSize:{
            '2xs': '0.3rem',
            xxs: '0.5rem',
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
            '6xl': '5.00rem',
        },
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                'gradient-conic': 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
                'join-us': "url('/joinus.png')",
                'footer-texture': "url('/img/footer-texture.png')",
            },
            fontFamily: {
                "Poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
            },

            animation: {
                fadeIn: "fadeIn 2s ease-in forwards",
                scroll: 'scroll 60s linear infinite',

            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-250px * 14))' },
                    fadeIn: {
                        "0%": { opacity: 0 },
                        "100%": { opacity: 1 }
                    }
                },

            },
        },
        variants: {
            extend: {},
            animation: ["motion-safe"]
        },
        plugins: [
            require('taos/plugin')
        ],
    },
}

