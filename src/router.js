import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import EventsPage from "./pages/EventsPage.vue";
import BeachesPage from "./pages/BeachesPage.vue";
import VillaAureliaPage from "./pages/VillaAureliaPage.vue";
import VillaDeiPiniPage from './pages/VillaDeiPiniPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/events",
      name: "events",
      component: EventsPage,
    },
    {
      path: "/beaches",
      name: "beaches",
      component: BeachesPage,
    },
    {
      path: "/villa-aurelia",
      name: "villa aurelia",
      component: VillaAureliaPage,
    },
    {
      path: "/villa-dei-pini",
      name: "villa dei pini",
      component: VillaDeiPiniPage,
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path.endsWith('/beaches')) {
    window.scrollTo(0, 0);
  } else if (to.path.endsWith('/events')) {
    window.scrollTo(0, 0);
  } else if (to.path.endsWith('/')) {
    window.scrollTo(0, 0);
  }
  next();
});



export { router };