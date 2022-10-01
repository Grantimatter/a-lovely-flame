import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()], 
	server: {
		fs: {
			allow: ['styles'],
		},
		host: "0.0.0.0"
	}
};

export default config;
