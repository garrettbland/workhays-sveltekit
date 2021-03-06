import { resolve } from 'path'
import adapter from '@sveltejs/adapter-netlify'

const config = {
    kit: {
        adapter: adapter(),
        target: '#svelte',
        vite: {
            resolve: {
                alias: {
                    $components: resolve('./src/components'),
                },
            },
        },
        prerender: {
            crawl: true,
            enabled: true,
            entries: ['*'],
        },
    },
}

export default config
