import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import copy from 'rollup-plugin-copy';

createApp(App).use(router).mount('#app');

export default {
    plugins: [
        copy({
            targets: [
                { src: 'src/assets/img/*', dest: 'dist/assets' },
            ],
        }),
    ],
};
