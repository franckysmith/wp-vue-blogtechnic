import { createRouter, createWebHistory } from "vue-router";

import Amplis from "../views/Amplis.vue";
import Presets from "../views/Presets.vue";
import Prealignement from "../views/Prealignement.vue";

const routes = [
  {
    path: "/",
    name: "Amplis",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Amplis
  },
  {
    path: "/presets",
    name: "Presets",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Presets
  },
  {
    path: "/prealignement",
    name: "Prealignement",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Prealignement
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
