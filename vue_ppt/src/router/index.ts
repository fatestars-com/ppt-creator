import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/demo',
      component: () => import('@/presentations/demo/index.vue')
    },
    {
      path: '/qwen3-next-bench',
      component: () => import('@/presentations/qwen3-next-bench/index.vue')
    },
    {
      path: '/design-language-template',
      component: () => import('@/presentations/design-language-template/index.vue')
    },
    {
      path: '/ai-skill-tree',
      component: () => import('@/presentations/ai-skill-tree/index.vue')
    },
    {
      path: '/cognition-framework',
      component: () => import('@/presentations/cognition-framework/index.vue')
    },
    {
      path: '/jianyi-zhujian-v1',
      component: () => import('@/presentations/jianyi-zhujian-v1/index.vue')
    },
    {
      path: '/jianyi-zhujian-v2',
      component: () => import('@/presentations/jianyi-zhujian-v2/index.vue')
    },
    {
      path: '/hermes-agent-framework',
      component: () => import('@/presentations/hermes-agent-framework/index.vue')
    }
  ],
})

export default router
