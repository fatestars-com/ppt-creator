<script setup lang="ts">
import PptContainer from '@/shared/ppt-container.vue'
import BackgroundManager from '@/shared/backgrounds/background-manager.vue'
import {
  createPresentationContext,
  providePresentationContext
} from '@/shared/presentation/presentation-context'
import { backgroundRegistry } from '@/shared/backgrounds/registry'

import Slide1 from './slide-1-title.vue'
import Slide2 from './slide-2-section-who.vue'
import Slide3 from './slide-3-story.vue'
import Slide4 from './slide-4-section-framework.vue'
import Slide5 from './slide-5-three-layers.vue'
import Slide6 from './slide-6-formula.vue'
import Slide7 from './slide-7-section-wealth.vue'
import Slide8 from './slide-8-wealth-laws.vue'
import Slide9 from './slide-9-section-action.vue'
import Slide10 from './slide-10-cta.vue'

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10]

const slideTitles = [
  '你赚不到钱，不是因为不够努力',
  '第一章 · 我是谁',
  '负债60万的教训',
  '第二章 · 三阶层认知模型',
  '三阶层框架图',
  '认知升级公式',
  '第三章 · 财富运转逻辑',
  '财富三定律',
  '第四章 · 我要做什么',
  '关注我，每天一个认知框架'
]

const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'demo-particles',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: 'cognition-framework',
  persist: true
})

providePresentationContext(presentationContext)
</script>

<template>
  <div class="relative flex h-screen w-screen overflow-hidden bg-black text-white">
    <BackgroundManager />
    <main class="relative z-10 flex h-full w-full items-center justify-center">
      <div class="h-full w-full">
        <PptContainer :slides="slides" :slide-titles="slideTitles" title="认知框架 | 剑意逐帧" />
      </div>
    </main>
  </div>
</template>
