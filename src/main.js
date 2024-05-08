import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import { gsap } from '../node_modules/gsap'
import { ScrollTrigger } from '../node_modules/gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


createApp(App).use(router).mount('#app');