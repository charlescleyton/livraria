import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['./resources/js/app.js'],
            refresh: true,
        }),
        react(),
    ],
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,  // Isso abrange arquivos JSX e JS
    },
    resolve: {
        alias: {
            '@': './resources/js',
        },
    },
});
