import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/base/desktop/index')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
