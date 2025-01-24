/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm': '480px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px'
			},
			colors: {
				dark: '#0a0a0a',
				primary: '#22092C',
				secondary: '#7e22ce',
				'accent-orange': '#F05941',
				'accent-red': '#BE3144',
				'accent-sky': '#08C2FF'
			},
			backgroundImage: {
				title: 'linear-gradient(0deg, #7e22ce, #faf5ff)',
			}
		},
	},
	plugins: [],
}
