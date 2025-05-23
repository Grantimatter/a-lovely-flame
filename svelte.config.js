import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src',
			$components: 'src/lib/components',
			$stores: 'src/lib/stores',
			$static: 'static'
		}
	}
};

export default config;
