/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-muted": "oklch(var(--primary-muted) / rgb(171, 0, 192))",
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes:[
            'light'
        ]
    }

}

