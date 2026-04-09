<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">MCP协议解析</h2>
      <div class="bg-slate-900/80 rounded-2xl p-6 border border-slate-700 mb-6">
        <p class="text-slate-300 text-center text-lg">
          "MCP是一个<span class="text-red-500">开放协议</span>，让AI助手能够与外部数据源和工具<span class="text-red-500">无缝连接</span>。"
        </p>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <div class="bg-slate-900/80 rounded-2xl p-6 border border-slate-700 text-center">
          <div class="text-red-500 text-xs tracking-widest uppercase mb-3">MCP Host</div>
          <p class="text-slate-300 text-sm">运行AI应用的宿主环境</p>
          <p class="text-slate-500 text-xs mt-2">开发环境 / Claude桌面应用</p>
        </div>
        <div class="bg-slate-900/80 rounded-2xl p-6 border border-slate-700 text-center">
          <div class="text-red-500 text-xs tracking-widest uppercase mb-3">MCP Client</div>
          <p class="text-slate-300 text-sm">嵌入在Host里的客户端</p>
          <p class="text-slate-500 text-xs mt-2">负责与MCP Server通信</p>
        </div>
        <div class="bg-slate-900/80 rounded-2xl p-6 border border-slate-700 text-center">
          <div class="text-red-500 text-xs tracking-widest uppercase mb-3">MCP Server</div>
          <p class="text-slate-300 text-sm">提供工具和数据的服务器</p>
          <p class="text-slate-500 text-xs mt-2">每个Server专注做一件事</p>
        </div>
      </div>
      <div class="mt-6 flex justify-center gap-4 text-sm">
        <span class="text-slate-400">解耦</span>
        <span class="text-slate-600">·</span>
        <span class="text-slate-400">可扩展</span>
        <span class="text-slate-600">·</span>
        <span class="text-red-400 font-bold">标准化接口</span>
      </div>
    </div>
  </div>
</template>
