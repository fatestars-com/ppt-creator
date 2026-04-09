<script setup lang="ts">
import PptContainer from '@/shared/ppt-container.vue'
import BackgroundManager from '@/shared/backgrounds/background-manager.vue'
import {
  createPresentationContext,
  providePresentationContext
} from '@/shared/presentation/presentation-context'
import { backgroundRegistry } from '@/shared/backgrounds/registry'

import Slide1 from './slide-1-title.vue'
import Slide2 from './slide-2-chapter1.vue'
import Slide3 from './slide-3-why-agents.vue'
import Slide4 from './slide-4-limitations.vue'
import Slide5 from './slide-5-chapter2.vue'
import Slide6 from './slide-6-mcp-arch.vue'
import Slide7 from './slide-7-mcp-flow.vue'
import Slide8 from './slide-8-chapter3.vue'
import Slide9 from './slide-9-planning-memory.vue'
import Slide10 from './slide-10-tool-perception.vue'
import Slide11 from './slide-11-runtime-evolution.vue'
import Slide12 from './slide-12-chapter4.vue'
import Slide13 from './slide-13-travel-case.vue'
import Slide14 from './slide-14-learning-path.vue'
import Slide15 from './slide-15-summary.vue'

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7,
  Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15
]

const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'demo-particles',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: 'hermes-agent-framework',
  persist: true
})
providePresentationContext(presentationContext)

const slideTitles = [
  'Hermes AgentFramework',
  '第一章：AI Agent赛道爆发',
  '为什么大厂都在押注AI Agent？',
  '大模型的两个局限',
  '第二章：MCP协议',
  'MCP协议解析',
  'MCP通信流程',
  '第三章：Hermes框架',
  '规划与记忆',
  '工具与感知',
  '运行时与进化',
  '第四章：实战案例',
  '旅行助手Agent',
  '学习路径',
  '总结与入场'
]
</script>

<template>
  <div class="relative flex h-screen w-screen overflow-hidden text-white">
    <BackgroundManager />
    <main class="relative z-10 flex h-full w-full items-center justify-center">
      <div class="deck-shell h-full w-full">
        <PptContainer :slides="slides" :slide-titles="slideTitles" title="Hermes AgentFramework" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.deck-shell :deep(.ppt-container) {
  background: transparent !important;
}
</style>
