/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      screens: {
        'xs': '460px',
        'xlg': '1127px'
      }
    },
	},
	plugins: [],
}
