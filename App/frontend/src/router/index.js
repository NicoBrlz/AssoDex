import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AssoView from "@/views/AssoView.vue";
import ActionsView from "@/views/ActionsView.vue";
import CarteView from "@/views/CarteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'assos',
      component: AssoView
    },
    {
      path:'/actions',
      name: 'actions',
      component: ActionsView
    }, {
      path: '/carte',
      name: 'carte',
      component: CarteView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
  ]
})

export default router
