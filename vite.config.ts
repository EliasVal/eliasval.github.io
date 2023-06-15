import { sveltekit } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import type { UserConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

const config: UserConfig = {
	plugins: [sveltekit(), svg()],
	css: {
		postcss: {
			plugins: [autoprefixer()]
		}
	}
};

export default config;
