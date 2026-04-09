<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">MCP通信流程</h2>
      <div class="flex flex-col items-center gap-3">
        <div class="bg-slate-800/80 rounded-xl px-8 py-4 border border-slate-600">
          <span class="text-slate-300">AI应用 <span class="text-slate-500">(MCP Host)</span></span>
        </div>
        <div class="text-red-500 text-2xl">↓ 用户请求</div>
        <div class="bg-slate-800/80 rounded-xl px-8 py-4 border border-slate-600">
          <span class="text-slate-300">MCP Client</span>
        </div>
        <div class="text-red-500 text-2xl">↓ JSON-RPC协议</div>
        <div class="bg-slate-800/80 rounded-xl px-8 py-4 border border-slate-600">
          <span class="text-slate-300">MCP Server <span class="text-slate-500">(工具/数据)</span></span>
        </div>
        <div class="text-red-500 text-2xl">↓ 返回结果</div>
        <div class="bg-slate-800/80 rounded-xl px-8 py-4 border border-slate-600">
          <span class="text-slate-300">AI应用</span>
        </div>
      </div>
    </div>
  </div>
</template>
