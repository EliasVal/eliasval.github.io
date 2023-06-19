import { sveltekit } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	css: {
		postcss: {
			plugins: [autoprefixer()]
		}
	}
};

export default config;
