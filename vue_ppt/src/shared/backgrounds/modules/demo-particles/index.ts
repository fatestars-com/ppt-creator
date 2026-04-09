import DemoParticlesBackground from './background.vue'
import type { BackgroundModuleMeta } from '../../types'

export const demoParticlesBackground: BackgroundModuleMeta = {
  id: 'demo-particles',
  name: 'Demo 粒子宇宙',
  description: '动态的 Three.js 粒子和发光精灵背景，适合科技感主题。',
  component: DemoParticlesBackground,
  tags: ['动态', 'Three.js']
}
