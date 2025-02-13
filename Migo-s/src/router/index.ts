import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import InfoProducto from '@/views/InfoProducto.vue';
import Gustos from '@/views/Gustos.vue';
import Evento from '@/views/Evento.vue';
import InfoEvento from '@/views/InfoEvento.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/InfoProducto',
    name: 'InfoProducto',
    component: InfoProducto
  },
  {
    path: '/Gustos',
    name: 'Gustos',
    component: Gustos
  },
  {
    path: '/Evento',
    name: 'Evento',
    component: Evento
  },
  {
    path: '/InfoEvento',
    name: 'InfoEvento',
    component: InfoEvento
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
