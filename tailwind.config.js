const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
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

        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

