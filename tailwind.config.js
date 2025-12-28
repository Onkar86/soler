/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                solar: {
                    green: '#2E8B57', // SeaGreen
                    blue: '#1E90FF',  // DodgerBlue
                    light: '#F0F8FF', // AliceBlue
                    dark: '#2F4F4F',  // DarkSlateGray
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                marathi: ['Mukta', 'sans-serif'], // Need to import this
            }
        },
    },
    plugins: [],
}
