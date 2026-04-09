<script setup lang="ts">
import PptContainer from '@/shared/ppt-container.vue'
import BackgroundManager from '@/shared/backgrounds/background-manager.vue'
import {
  createPresentationContext,
  providePresentationContext
} from '@/shared/presentation/presentation-context'
import { backgroundRegistry } from '@/shared/backgrounds/registry'

import Slide01 from './slide-01-hook1.vue'
import Slide02 from './slide-02-hook2.vue'
import Slide03 from './slide-03-intro.vue'
import Slide04 from './slide-04-chapter1.vue'
import Slide05 from './slide-05-story1.vue'
import Slide06 from './slide-06-story2.vue'
import Slide07 from './slide-07-story3.vue'
import Slide08 from './slide-08-chapter2.vue'
import Slide09 from './slide-09-three-layers.vue'
import Slide10 from './slide-10-formula.vue'
import Slide11 from './slide-11-chapter3.vue'
import Slide12 from './slide-12-wealth-laws.vue'
import Slide13 from './slide-13-chapter4.vue'
import Slide14 from './slide-14-cta.vue'
import Slide15 from './slide-15-ending.vue'

const slides = [
  Slide01, Slide02, Slide03, Slide04, Slide05,
  Slide06, Slide07, Slide08, Slide09, Slide10,
  Slide11, Slide12, Slide13, Slide14, Slide15
]

const slideTitles = [
  '你赚不到钱，不是因为不够努力',
  '是因为你根本没看透',
  '我是剑意逐帧',
  '01 · 我是谁',
  '全失败了',
  '60万没了',
  '我没资格崩溃，只能重建',
  '02 · 三阶层认知模型',
  '三阶层框架',
  '认知升级公式',
  '03 · 财富运转逻辑',
  '财富三定律',
  '04 · 我要做什么',
  '每天一个认知框架',
  '日更第001天'
]

const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'demo-particles',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: 'jianyi-zhujian-v2',
  persist: true
})

providePresentationContext(presentationContext)
</script>

<template>
  <div class="relative flex h-screen w-screen overflow-hidden text-white">
    <BackgroundManager />
    <main class="relative z-10 flex h-full w-full items-center justify-center">
      <div class="deck-shell h-full w-full">
        <PptContainer :slides="slides" :slide-titles="slideTitles" title="剑意逐帧 V2" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.deck-shell :deep(.ppt-container) {
  background: transparent !important;
}
</style>
