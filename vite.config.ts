import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    build: {
        lib: {
            entry: 'src/textField.ts',
            name: 'TextField',
            fileName: (format) => `textField.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['@editorjs/editorjs'],
            output: {
                globals: {
                    '@editorjs/editorjs': 'EditorJS',
                },
            },
        },
    },
    plugins: [dts(), cssInjectedByJsPlugin()],
    server: {
        open: true,  // サーバーが起動するときに自動的にブラウザを開く
    },
});
