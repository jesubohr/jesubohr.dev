/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'primary': '#199400',
      },
      screens: {
        'xs': '554px',
        'xlg': '1127px'
      }
    },
	},
	plugins: [],
}
