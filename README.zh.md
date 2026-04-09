# PPT Creator

使用 **Vue3 + Tailwind CSS** 创建精美的网页版演示文稿，而非传统的 .pptx 文件。
核心理念：**AI 负责写代码，你只需预览视觉效果**。

---

## 核心工作流

```
[用户提供内容/想法]
        ↓
[规划幻灯片结构与类型]
        ↓
[编写页面描述（描述内容，非代码）]
        ↓
[生成 Vue3 幻灯片组件 → index.vue + slide-N-*.vue]
        ↓
[注册路由 + 添加首页链接]
        ↓
[用户在 localhost:XXXX 预览]
        ↓
[反馈循环："改一下 X" → 重新生成]
        ↓
[用户满意后完成]
```

---

## 快速开始

### 1. 安装依赖

```bash
cd vue_ppt
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
# → http://localhost:5173
```

### 3. 创建新的演示文稿

在 `vue_ppt/src/presentations/<slug>/` 目录下创建文件。

---

## 项目结构

```
ppt-creator/
├── SKILL.md              # Skill 定义文件
├── agents/               # Agent 配置文件
│   ├── analyzer.md
│   ├── comparator.md
│   └── grader.md
├── scripts/               # Python 评估脚本
│   ├── run_eval.py
│   ├── run_loop.py
│   └── ...
├── eval-viewer/           # 评估结果查看器
│   └── viewer.html
├── assets/                 # 静态资源
│   └── eval_review.html
└── vue_ppt/               # Vue3 演示文稿项目
    ├── src/
    │   ├── presentations/  # 各演示文稿的幻灯片组件
    │   │   └── <slug>/
    │   │       ├── index.vue      # 入口文件
    │   │       └── slide-*.vue    # 单个幻灯片
    │   ├── shared/               # 共享组件
    │   │   ├── backgrounds/      # 动态背景
    │   │   ├── ppt-container.vue # 幻灯片导航容器
    │   │   └── presentation/
    │   ├── views/Home.vue         # 首页
    │   └── router/index.ts        # 路由配置
    └── package.json
```

---

## 创建新演示文稿

### Step 1：明确内容

确认以下信息：
- **主题**：演示文稿讲什么？
- **页数**：大约多少页？（或让内容决定）
- **风格**：深色还是浅色？有无品牌色？
- **语言**：中文还是英文？

### Step 2：规划幻灯片结构

标准结构：

| # | 幻灯片类型 | 用途 |
|---|-----------|------|
| 1 | Hero/Title | 主题标题，吸引注意 |
| 2 | Section | 章节开场 |
| 3+ | Content | 内容页 |
| Last | CTA / End | 行动号召 |

可用类型：
- **Hero** - 大标题 + 副标题
- **Section Divider** - 章节分隔页
- **Stats/Metrics** - 大数字展示
- **Checklist/Guides** - 步骤或列表
- **Compare** - 对比选项
- **CTA** - 行动号召页

### Step 3：编写页面描述

```markdown
# Page N: [幻灯片类型]
[标题]
[内容描述]
[设计备注：颜色、重点、布局]
```

### Step 4：生成幻灯片

在 `vue_ppt/src/presentations/<slug>/` 下创建：

**index.vue**（入口文件，必须包含 `presentationContext`）：

```vue
<script setup lang="ts">
import PptContainer from '@/shared/ppt-container.vue'
import BackgroundManager from '@/shared/backgrounds/background-manager.vue'
import {
  createPresentationContext,
  providePresentationContext
} from '@/shared/presentation/presentation-context'
import { backgroundRegistry } from '@/shared/backgrounds/registry'

import Slide1 from './slide-1-title.vue'
import Slide2 from './slide-2-section.vue'

const slides = [Slide1, Slide2, ...]

const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'demo-particles',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: 'your-slug',
  persist: true
})
providePresentationContext(presentationContext)

const slideTitles = ['Slide 1 title', 'Slide 2 title', ...]
</script>

<template>
  <div class="relative flex h-screen w-screen overflow-hidden text-white">
    <BackgroundManager />
    <main class="relative z-10 flex h-full w-full items-center justify-center">
      <div class="deck-shell h-full w-full">
        <PptContainer :slides="slides" :slide-titles="slideTitles" title="Your Title" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.deck-shell :deep(.ppt-container) {
  background: transparent !important;
}
</style>
```

**slide-N-*.vue**（单个幻灯片）：

```vue
<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <!-- 幻灯片内容 -->
  </div>
</template>
```

### Step 5：注册路由

**1. 添加路由** `vue_ppt/src/router/index.ts`：

```ts
{
  path: '/your-slug',
  component: () => import('@/presentations/your-slug/index.vue')
}
```

**2. 添加到首页** `vue_ppt/src/views/Home.vue`：

```js
{
  id: 'your-slug',
  title: 'Your Title',
  description: 'Brief description',
  route: '/your-slug'
}
```

---

## 设计规范

### 深色主题（推荐）

| 元素 | 颜色 |
|------|------|
| 背景 | 动态背景 (demo-particles / soft-mesh) |
| 主文字 | `text-white` |
| 次要文字 | `text-slate-400` |
| 强调色 | `text-red-500` / `bg-red-600` |
| 卡片背景 | `bg-slate-900` |

### 字体层级

- H1（主标题）：`text-7xl font-black tracking-tight`
- H2（章节标题）：`text-4xl font-extrabold`
- H3（副标题）：`text-2xl font-bold`
- 正文：`text-xl leading-relaxed`
- 注释：`text-sm text-slate-400`

---

## 快捷键

| 按键 | 功能 |
|------|------|
| `←` `→` `Space` | 导航 |
| `Home` / `End` | 首页 / 末页 |
| `Esc` | 缩略图面板 |
| `Ctrl/⌘ + Shift + P` | 切换背景设置 |

---

## 参考演示

- `cognition-framework` - 深色主题，红色强调
- `jianyi-zhujian-v1` - 剑意逐帧账号介绍
- `ai-skill-tree` - 技能树隐喻演示
- `design-language-template` - 毛玻璃 + 渐变主题

---

## 命令

```bash
cd vue_ppt
npm install   # 首次安装依赖
npm run dev   # 开发服务器 localhost:5173
npm run build # 生产构建
vue-tsc --noEmit  # 类型检查
```
