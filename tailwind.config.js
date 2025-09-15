/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'bg-dark': '#0b0b0b',
                'muted': '#9aa4a6'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
                mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo']
            }
        }
    },
    plugins: [],
}