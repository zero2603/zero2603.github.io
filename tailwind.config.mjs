/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
			screens: {
				'sm': '480px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px'
			},
			colors: {
				dark: {
					700: '#1b1623',
					900: '#0a0a0a'
				},
				primary: '#22092C',
				secondary: '#7e22ce',
				'accent-orange': '#F05941',
				'accent-red': '#BE3144',
				'accent-sky': '#08C2FF'
			},
			backgroundImage: {
				title: 'linear-gradient(0deg, #7e22ce, #faf5ff)',
				button: 'linear-gradient(90deg, #7e22ce, #1b1623)',
				card: 'linear-gradient(135deg, #7e22ce, #0a0a0a)',
			}
		},
	},
	plugins: [],
}
