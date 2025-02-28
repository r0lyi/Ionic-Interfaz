import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import InfoProducto from '@/views/InfoProducto.vue';
import Gustos from '@/views/Gustos.vue';
import Evento from '@/views/Evento.vue';
import InfoEvento from '@/views/InfoEvento.vue';
import Opinion from '@/views/Opinion.vue';
import Pago from '@/views/Pago.vue';
import Personal from '@/views/Personal.vue';

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
    path: '/producto/:id',
    name: 'InfoProducto',
    component: InfoProducto,
    props: true, // Permite pasar el parámetro :id como prop al componente
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
    path: '/evento/:id',
    name: 'InfoEvento',
    component: InfoEvento,
    props: true,
  },
  {
    path: '/Opinion',
    name: 'Opinion',
    component: Opinion
  },
  {
    path: '/Pago',
    name: 'Pago',
    component: Pago
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: Personal
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
