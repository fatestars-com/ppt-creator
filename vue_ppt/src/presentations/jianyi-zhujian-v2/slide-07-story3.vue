<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-4xl text-center space-y-8">
      <p class="text-2xl text-white leading-relaxed">
        出事之后，我没有告诉任何人。
      </p>
      <p class="text-2xl text-slate-300 leading-relaxed">
        不是怕丢脸。
      </p>
      <p class="text-2xl text-slate-300 leading-relaxed">
        是因为我知道，告诉别人没有用。
      </p>
      <div class="border-l-4 border-red-600 pl-8 text-left space-y-4 mt-12">
        <p class="text-xl text-slate-400 italic">"你怎么这么不小心"</p>
        <p class="text-xl text-slate-400 italic">"当初让你别做你不听"</p>
        <p class="text-xl text-slate-400 italic">"差不多得了，想开点"</p>
      </div>
      <div class="mt-16">
        <p class="text-3xl text-red-500 font-bold">我没资格崩溃。</p>
        <p class="text-3xl text-red-500 font-bold mt-4">我只能重建。</p>
      </div>
    </div>
  </div>
</template>
