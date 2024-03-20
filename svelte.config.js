// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [autoprefixer()]
      }
    })
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $lib: './src/lib',
      '$lib/*': './src/lib/*'
    }
  }
};

export default config;
