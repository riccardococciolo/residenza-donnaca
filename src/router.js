import { createRouter, createWebHistory } from "vue-router";
import HouseDetailsPage from "./pages/HouseDetailsPage.vue";
import HomePage from "./pages/HomePage.vue";
import EventsPage from "./pages/EventsPage.vue";
import BeachesPage from "./pages/BeachesPage.vue";

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
        path: "/details/:slug",
        name: "house-details",
        component: HouseDetailsPage,
      }
    ],
  });
  
  export { router };