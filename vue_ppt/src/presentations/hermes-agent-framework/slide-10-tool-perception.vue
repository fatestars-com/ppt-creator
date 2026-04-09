<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">工具与感知</h2>
      <div class="grid grid-cols-2 gap-8">
        <div class="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
          <div class="text-red-500 text-xs tracking-widest uppercase mb-4">模块三 · Tool Use</div>
          <h3 class="text-2xl font-bold mb-4">工具调用</h3>
          <div class="grid grid-cols-2 gap-3 mb-4">
            <div class="bg-slate-800/60 rounded-lg px-3 py-2 text-sm text-slate-300">文件操作</div>
            <div class="bg-slate-800/60 rounded-lg px-3 py-2 text-sm text-slate-300">网络请求</div>
            <div class="bg-slate-800/60 rounded-lg px-3 py-2 text-sm text-slate-300">代码执行</div>
            <div class="bg-slate-800/60 rounded-lg px-3 py-2 text-sm text-slate-300">数据库</div>
          </div>
          <p class="text-xs text-slate-500">采用MCP协议接入外部工具，扩展性强</p>
        </div>
        <div class="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
          <div class="text-red-500 text-xs tracking-widest uppercase mb-4">模块四 · Perception</div>
          <h3 class="text-2xl font-bold mb-4">输入预处理</h3>
          <div class="space-y-3 text-sm text-slate-400">
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span><span class="text-slate-300">意图识别：</span>用户到底想干什么？</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span><span class="text-slate-300">信息提取：</span>从杂乱输入里提取有用信息</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span><span class="text-slate-300">上下文补全：</span>补充缺失的信息碎片</span>
            </div>
          </div>
          <p class="mt-4 text-xs text-slate-500">理解用户没说出口的意思、模糊指令的真实意图</p>
        </div>
      </div>
    </div>
  </div>
</template>
