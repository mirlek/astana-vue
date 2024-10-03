import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router

    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

