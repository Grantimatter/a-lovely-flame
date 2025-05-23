/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		themes: [
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter',
			{
				lovelyFlame: {
					primary: '#ffc0cbff',
					secondary: '#faa94a80',
					//secondary: '#fdba74',
					accent: '#fc9f83ff',
					neutral: '#191D24',
					'base-100': '#2A303C',
					info: '#67e8f9',
					success: '#36D399',
					warning: '#fde047',
					error: '#f87171',

					fontFamily: {
						'sans': ['"Julius Sans One"','ui-sans-serif', 'system-ui'],
						'serif': ['"Julius Sans One"', 'Georgia'],
						'mono': ['ui-monospace', 'SFMono-Regular'],
						'display': ['"Julius Sans On"e'],
						'body': ['"Julius Sans One"']
					  },

					'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
					'--btn-text-case': 'uppercase', // set default text transform for buttons
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons
					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem' // border radius of tabs
				}
			}
		]
	}
};
