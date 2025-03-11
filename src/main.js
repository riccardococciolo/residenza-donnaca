import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import { gsap } from '../node_modules/gsap'
import { ScrollTrigger } from '../node_modules/gsap/ScrollTrigger';
import VueMeta from 'vue-meta'
gsap.registerPlugin(ScrollTrigger);
Vue.use(VueMeta)


createApp(App).use(router).mount('#app');

new Vue({
    render: h => h(App),
  }).$mount('#app')