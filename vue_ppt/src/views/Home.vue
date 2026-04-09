<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

interface Presentation {
  id: string
  title: string
  description: string
  route: string
}

interface Category {
  id: string
  name: string
  expanded: boolean
  presentations: Presentation[]
}

const categories = ref<Category[]>([
  {
    id: 'jianyi-zhujian',
    name: '剑意逐帧',
    expanded: true,
    presentations: [
      {
        id: 'jianyi-zhujian-v1',
        title: 'V1 · 红色粒子风',
        description: '深色粒子背景 · 红色强调风格',
        route: '/jianyi-zhujian-v1'
      },
      {
        id: 'jianyi-zhujian-v2',
        title: 'V2 · 红色粒子风',
        description: '深色粒子背景 · 红色强调风格',
        route: '/jianyi-zhujian-v2'
      },
      {
        id: 'hermes-agent-framework',
        title: 'Hermes AgentFramework',
        description: '蚂蚁集团开源AI Agent开发框架 · MCP协议详解',
        route: '/hermes-agent-framework'
      }
    ]
  },
  {
    id: 'ai-skill-tree',
    name: 'AI邪修PPT',
    expanded: false,
    presentations: [
      {
        id: 'ai-skill-tree',
        title: 'AI Skill Tree ',
        description: '点亮隐藏技能树的关键节点',
        route: '/ai-skill-tree'
      },
      {
        id: 'cognition-framework',
        title: '认知框架',
        description: '你赚不到钱不是因为不够努力',
        route: '/cognition-framework'
      }
    ]
  },
  {
    id: 'demo',
    name: '演示模板',
    expanded: false,
    presentations: [
      {
        id: 'demo',
        title: 'Demo Presentation',
        description: '具有现代功能的交互式演示演示',
        route: '/demo'
      },
      {
        id: 'qwen3-next-bench',
        title: 'Qwen3‑Next Bench',
        description: '基准分析和性能洞察',
        route: '/qwen3-next-bench'
      },
      {
        id: 'design-language-template',
        title: '设计语言模板',
        description: '基于设计语言的多版式中文模板（含动效/互动）',
        route: '/design-language-template'
      }
    ]
  }
])

const toggleCategory = (categoryId: string) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  if (category) {
    category.expanded = !category.expanded
  }
}
</script>

<template>
  <div class="home-shell relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-900/10 to-cyan-500/10"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.2),transparent_45%)]"></div>
    </div>

    <div class="relative z-10 flex min-h-screen flex-col">
      <header class="px-6 pt-16 text-center">
        <p class="text-xs uppercase tracking-[0.6em] text-cyan-400/70">PRESENTATION DECKS</p>
        <h1 class="mt-6 text-4xl font-semibold tracking-tight text-cyan-100 md:text-5xl">
          演示文稿集合
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-sm text-slate-400 md:text-base">
        </p>
      </header>

      <main class="flex-1 px-6 pb-16">
        <div class="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_120px_-60px_rgba(34,211,238,0.8)]">
          <div class="border-b border-cyan-500/10 px-8 py-6">
            <div class="flex flex-col gap-2 text-left md:flex-row md:items-end md:justify-between">
              <div>
                <h2 class="text-lg font-medium text-cyan-200">演示列表</h2>
                <p class="text-xs text-slate-400">
                  分类展开列表，保持主体区域独立滚动。
                </p>
              </div>
              <span class="text-xs uppercase tracking-widest text-cyan-500/70">
                {{ categories.length }} Categories
              </span>
            </div>
          </div>

          <div class="flex-1 overflow-hidden">
            <div class="scroll-area h-[58vh] overflow-y-auto px-6 py-6 md:px-8">
              <div class="space-y-6">
                <section v-for="category in categories" :key="category.id" class="rounded-2xl border border-cyan-500/10 bg-slate-900/40">
                  <button
                    @click="toggleCategory(category.id)"
                    class="group flex w-full items-center justify-between gap-6 rounded-2xl px-5 py-4 text-left transition-colors duration-200 hover:bg-cyan-500/5"
                  >
                    <div class="flex items-center gap-3">
                      <span class="marker marker-category" aria-hidden="true"></span>
                      <div>
                        <h3 class="text-base font-bold uppercase tracking-widest text-cyan-100">
                          {{ category.name }}
                        </h3>
                        <p class="text-xs text-slate-400">
                          {{ category.presentations.length }} 个演示文稿
                        </p>
                      </div>
                    </div>
                    <svg
                      class="h-4 w-4 text-cyan-300 transition-transform duration-200"
                      :class="{ 'rotate-180': category.expanded }"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  <transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="opacity-0 -translate-y-2"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 -translate-y-2"
                  >
                    <ul v-show="category.expanded" class="divide-y divide-cyan-500/10 border-t border-cyan-500/10">
                      <li v-for="presentation in category.presentations" :key="presentation.id">
                        <RouterLink
                          :to="presentation.route"
                          class="flex items-start gap-3 px-5 py-4 transition-colors duration-200"
                          :class="[
                            presentation.route === '#' ? 'pointer-events-none text-slate-500/70' : 'hover:bg-cyan-500/5',
                            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2'
                          ]"
                        >
                          <span class="marker marker-doc" aria-hidden="true"></span>
                          <div class="flex-1">
                            <p class="text-sm font-medium text-cyan-100">
                              {{ presentation.title }}
                            </p>
                            <p class="mt-1 text-sm leading-relaxed text-slate-400">
                              {{ presentation.description }}
                            </p>
                          </div>
                          <svg
                            v-if="presentation.route !== '#'"
                            class="mt-1 h-4 w-4 text-cyan-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          >
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </RouterLink>
                      </li>
                    </ul>
                  </transition>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.home-shell::after {
  content: '';
  position: absolute;
  inset: -40%;
  background: conic-gradient(from 90deg at 50% 50%, rgba(14, 165, 233, 0.12), transparent 30%, transparent 60%, rgba(59, 130, 246, 0.12));
  filter: blur(120px);
  opacity: 0.5;
  pointer-events: none;
}

.scroll-area {
  scrollbar-width: thin;
  scrollbar-color: rgba(34, 211, 238, 0.4) transparent;
}

.scroll-area::-webkit-scrollbar {
  width: 6px;
}

.scroll-area::-webkit-scrollbar-track {
  background: transparent;
}

.scroll-area::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, rgba(56, 189, 248, 0.6), rgba(14, 165, 233, 0.2));
  border-radius: 9999px;
}

.marker {
  position: relative;
  display: inline-flex;
  width: 18px;
  justify-content: center;
}

.marker::before {
  content: '';
  display: block;
  border-radius: 9999px;
  width: 2px;
  background: linear-gradient(to bottom, rgba(34, 211, 238, 0.9), rgba(14, 165, 233, 0.4));
}

.marker-category::before {
  height: 18px;
}

.marker-doc::before {
  height: 14px;
  opacity: 0.7;
}
</style>
