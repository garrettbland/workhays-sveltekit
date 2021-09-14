import path from 'path'
import adapter from '@sveltejs/adapter-netlify'

const config = {
    kit: {
        vite: {
            resolve: {
                alias: {
                    $components: path.resolve('src/components/'),
                },
            },
        },
        adapter: adapter(),
        target: '#svelte',
    },
}

export default config
