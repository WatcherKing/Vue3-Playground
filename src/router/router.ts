import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/AppLayout.vue'),
    children: [
      {
        path: 'marvel-heroes',
        name: 'Marvel Heroes',
        component: () => import('@/pages/MarvelHeroes.vue')
      },
      {
        path: 'calender',
        name: 'Calender',
        component: () => import('@/pages/Calender.vue')
      },
      {
        path: 'markdown',
        name: 'Markdown',
        component: () => import('@/pages/MarkdownPage.vue')
      },
      {
        path: 'slider',
        name: 'Slider',
        component: () => import('@/pages/Slider.vue')
      }
    ]
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;