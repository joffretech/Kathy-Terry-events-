/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS/TS/JSX/TSX files in src
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                'brand-gold': '#BFA15F', // Rich, sophisticated gold
                'brand-black': '#0A0A0A', // Deep black for dark mode background
                'brand-white': '#FFFFFF', // Crisp white for light mode background
                // Add other accent colors if needed later
            },
        },
    },
    plugins: [],
}
