import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaInicial from '../views/TelaInicial.vue'
import LucroView from '../views/LucroView.vue'
import PerfilView from '../views/PerfilView.vue'
import CaixaView from '../views/PerfilView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: TelaInicial
    },
    {
      path: '/lucro',
      name: 'lucro',
      component: LucroView
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilView
    },
    {
      path: '/caixa',
      name: 'caixa',
      component: CaixaView
    }
  ]
})

export default router
