<template>
  <div class="soft-mesh-background" aria-hidden="true">
    <div class="layer mesh-gradient" />
    <div class="glass-veil" />
  </div>
</template>

<script setup lang="ts">
// No script needed; purely visual background.
</script>

<style scoped>
.soft-mesh-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.layer {
  position: absolute;
  inset: 0;
}

.mesh-gradient {
  background-image:
    radial-gradient(1000px 520px at 12% 18%, rgba(99, 102, 241, 0.35), transparent 60%),
    radial-gradient(820px 480px at 82% 28%, rgba(236, 72, 153, 0.30), transparent 60%),
    radial-gradient(900px 560px at 56% 82%, rgba(20, 184, 166, 0.28), transparent 60%),
    linear-gradient(180deg, #ffffff, #f4f7ff);
  filter: saturate(1.12) contrast(1.04);
}

.glass-veil {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(4px) saturate(1.02);
  -webkit-backdrop-filter: blur(4px) saturate(1.02);
  pointer-events: none;
}
</style>
