import type { BackgroundModuleMeta } from './types'
import { demoParticlesBackground } from './modules/demo-particles'
import { softMeshBackground } from './modules/soft-mesh'

export const backgroundRegistry: BackgroundModuleMeta[] = [
  demoParticlesBackground,
  softMeshBackground
]

export const getBackgroundById = (id: string): BackgroundModuleMeta | undefined => {
  return backgroundRegistry.find(bg => bg.id === id)
}
