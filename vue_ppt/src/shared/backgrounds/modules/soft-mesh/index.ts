import SoftMeshBackground from './background.vue'
import type { BackgroundModuleMeta } from '../../types'

export const softMeshBackground: BackgroundModuleMeta = {
  id: 'soft-mesh',
  name: '柔和网格渐变',
  description: '轻盈的多彩渐变和磨砂玻璃质感，适合纯展示型页面。',
  component: SoftMeshBackground,
  tags: ['静态', '轻量']
}
