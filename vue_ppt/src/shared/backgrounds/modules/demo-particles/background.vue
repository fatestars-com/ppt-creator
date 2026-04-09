<template>
  <div ref="container" class="demo-particles-bg" />
</template>

<script setup lang="ts">
import { ref, shallowRef, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const scene = shallowRef<THREE.Scene | null>(null)
const camera = shallowRef<THREE.PerspectiveCamera | null>(null)
const renderer = shallowRef<THREE.WebGLRenderer | null>(null)
const particles = shallowRef<THREE.Points | null>(null)
const container = ref<HTMLElement | null>(null)

interface GlowSprite {
  sprite: THREE.Sprite
  basePosition: THREE.Vector3
  amplitude: THREE.Vector3
  speed: THREE.Vector3
}

const glowSprites: GlowSprite[] = []
const glowTextureCache = new Map<string, THREE.Texture>()
const clock = new THREE.Clock()
let particleTexture: THREE.Texture | null = null

const getGlowTexture = (hexColor: string) => {
  if (glowTextureCache.has(hexColor)) {
    return glowTextureCache.get(hexColor) as THREE.Texture
  }

  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('Unable to create 2D context for glow texture')
  }

  const color = new THREE.Color(hexColor)
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, 0.85)`)
  gradient.addColorStop(1, `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, 0)`)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  texture.magFilter = THREE.LinearFilter
  texture.minFilter = THREE.LinearFilter

  glowTextureCache.set(hexColor, texture)
  return texture
}

const createCircleTexture = () => {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('Unable to create 2D context for particle texture')
  }

  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.6)')
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  texture.magFilter = THREE.LinearFilter
  texture.minFilter = THREE.LinearFilter

  return texture
}

const jitter = (range: number) => (Math.random() * 2 - 1) * range

const createGlowOrbConfigs = () => {
  const base = [
    { color: '#8a2be2', angle: Math.PI * 0.18, radius: 7, height: 3.6, depth: -3.5, scale: 9 },
    { color: '#40e0d0', angle: -Math.PI * 0.35, radius: 6, height: -3.8, depth: -4.2, scale: 7.5 },
    { color: '#ff69b4', angle: Math.PI * 0.78, radius: 4.2, height: 0.8, depth: -2.8, scale: 6.2 }
  ]

  return base.map(item => {
    const angle = item.angle + jitter(0.12)
    const radius = item.radius + jitter(0.6)
    const position = new THREE.Vector3(
      Math.cos(angle) * radius,
      item.height + jitter(0.8),
      item.depth + jitter(0.4)
    )

    const amplitude = new THREE.Vector3(
      1.2 + Math.random() * 1.2,
      1.1 + Math.random() * 1.4,
      0.5 + Math.random() * 0.7
    )
    const speed = new THREE.Vector3(
      0.16 + Math.random() * 0.08,
      0.14 + Math.random() * 0.1,
      0.1 + Math.random() * 0.08
    )

    return {
      color: item.color,
      position,
      scale: item.scale * (1 + jitter(0.08)),
      amplitude,
      speed
    }
  })
}

const handleResize = () => {
  if (!camera.value || !renderer.value) return

  camera.value.aspect = window.innerWidth / window.innerHeight
  camera.value.updateProjectionMatrix()
  renderer.value.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  if (!container.value) return

  scene.value = new THREE.Scene()

  camera.value = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.value.position.z = 10

  renderer.value = new THREE.WebGLRenderer({ alpha: true })
  renderer.value.setSize(window.innerWidth, window.innerHeight)
  renderer.value.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.value.domElement.style.pointerEvents = 'none'
  renderer.value.domElement.classList.add('demo-particles-canvas')
  container.value.appendChild(renderer.value.domElement)

  const glowConfigs = createGlowOrbConfigs()

  glowConfigs.forEach(config => {
    const material = new THREE.SpriteMaterial({
      map: getGlowTexture(config.color),
      color: config.color,
      transparent: true,
      opacity: 0.7
    })

    const sprite = new THREE.Sprite(material)
    sprite.position.copy(config.position)
    sprite.scale.set(config.scale, config.scale, config.scale)

    glowSprites.push({
      sprite,
      basePosition: config.position.clone(),
      amplitude: config.amplitude,
      speed: config.speed
    })

    scene.value?.add(sprite)
  })

  const particleCount = 5000
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  const velocities = new Float32Array(particleCount * 3)
  particleTexture?.dispose()
  particleTexture = createCircleTexture()

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 20
    positions[i3 + 1] = (Math.random() - 0.5) * 20
    positions[i3 + 2] = (Math.random() - 0.5) * 20

    colors[i3] = 0.3 + Math.random() * 0.7
    colors[i3 + 1] = 0.2 + Math.random() * 0.3
    colors[i3 + 2] = 0.8 + Math.random() * 0.2

    velocities[i3] = (Math.random() - 0.5) * 0.02
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.02
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.02
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: 0.08,
    map: particleTexture,
    alphaTest: 0.3,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  particles.value = new THREE.Points(geometry, material)
  scene.value.add(particles.value)

  const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
  scene.value.add(ambientLight)

  const animate = () => {
    requestAnimationFrame(animate)

    const time = clock.getElapsedTime()

    glowSprites.forEach(({ sprite, basePosition, amplitude, speed }) => {
      const x = basePosition.x + Math.sin(time * speed.x) * amplitude.x
      const y = basePosition.y + Math.cos(time * speed.y) * amplitude.y
      const z = basePosition.z + Math.sin(time * speed.z) * amplitude.z
      sprite.position.set(x, y, z)
    })

    if (particles.value && camera.value && renderer.value) {
      particles.value.rotation.y += 0.001
      particles.value.rotation.x += 0.0005

      const data = particles.value.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount * 3; i += 3) {
        data[i] += velocities[i]
        data[i + 1] += velocities[i + 1]
        data[i + 2] += velocities[i + 2]

        if (Math.abs(data[i]) > 10) velocities[i] *= -1
        if (Math.abs(data[i + 1]) > 10) velocities[i + 1] *= -1
        if (Math.abs(data[i + 2]) > 10) velocities[i + 2] *= -1
      }
      particles.value.geometry.attributes.position.needsUpdate = true

      renderer.value.render(scene.value, camera.value)
    }
  }

  animate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)

  glowSprites.forEach(({ sprite }) => {
    const material = sprite.material
    if (material instanceof THREE.SpriteMaterial) {
      material.map?.dispose()
      material.dispose()
    }
  })
  glowSprites.length = 0

  glowTextureCache.forEach(texture => texture.dispose())
  glowTextureCache.clear()
  particleTexture?.dispose()
  particleTexture = null

  if (particles.value) {
    particles.value.geometry.dispose()
    const material = particles.value.material
    if (Array.isArray(material)) {
      material.forEach(mat => mat.dispose())
    } else {
      material.dispose()
    }
  }

  renderer.value?.dispose()
})
</script>

<style scoped>
.demo-particles-bg {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  z-index: 0;
}

.demo-particles-canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
