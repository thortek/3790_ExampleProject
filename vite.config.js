import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()], 
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser'
		}
	},
};

export default config;
