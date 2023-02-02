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
        extend: {
            animation: {
                type: 'typing 5s steps(30, end), blink .75s step-end infinite;',
            },
            keyframes: {
                type: {
                    '0%': { transform: 'translateX(0ch)' },
                    '5%, 10%': { transform: 'translateX(1ch)' },
                    '15%, 20%': { transform: 'translateX(2ch)' },
                    '25%, 30%': { transform: 'translateX(3ch)' },
                    '35%, 40%': { transform: 'translateX(4ch)' },
                    '45%, 50%': { transform: 'translateX(5ch)' },
                    '55%, 60%': { transform: 'translateX(6ch)' },
                    '65%, 70%': { transform: 'translateX(7ch)' },
                    '75%, 80%': { transform: 'translateX(8ch)' },
                    '85%, 90%': { transform: 'translateX(9ch)' },
                    '95%, 100%': { transform: 'translateX(11ch)' },
                },
            },
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

