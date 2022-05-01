import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter(),
        vite: {
            ssr: {
                noExternal: [
                    '@fortawesome/free-brands-svg-icons',
                    '@fortawesome/free-regular-svg-icons',
                    '@fortawesome/free-solid-svg-icons',
                    '@fortawesome/fontawesome-svg-core',
                ],
            },
        },
    },
};

export default config;
