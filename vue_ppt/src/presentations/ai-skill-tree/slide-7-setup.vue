<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const tabs = [
  { id: 'env', label: '环境', spotlight: 'Node.js 最新版' },
  { id: 'frameworks', label: '使用框架', spotlight: '前端双修' },
  { id: 'tools', label: '工具', spotlight: 'AI + IDE' },
  { id: 'models', label: '模型场景', spotlight: '组合拳' },
  { id: 'starter', label: '示例工程', spotlight: '快速开跑' }
] as const

const activeTab = ref<typeof tabs[number]['id']>('env')

const selectTab = (id: typeof tabs[number]['id']) => {
  activeTab.value = id
}
</script>

<template>
  <section class="slide-shell">
    <div class="panel">
      <header class="headline-group">
        <h2>环境 · 工程准备</h2>
        <p>照着流程搭建，把工具链和模型全部一次性喂给 AI。</p>
      </header>

      <nav class="tab-bar" role="tablist" aria-label="环境和工具切换">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-pill"
          type="button"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :class="{ active: activeTab === tab.id }"
          @click="selectTab(tab.id)"
        >
          <span class="tab-label">{{ tab.label }}</span>
          <span class="tab-spotlight">{{ tab.spotlight }}</span>
        </button>
      </nav>

      <div class="tab-content" role="tabpanel">
        <div v-if="activeTab === 'env'" class="content-card">
          <h3>Node.js（最新版）</h3>
          <pre class="code-block" aria-label="安装 Node.js 的命令">
<code># Download and install Chocolatey:
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"
# Download and install Node.js:
choco install nodejs --version="22.19.0"
# Verify the Node.js version:
node -v # Should print "v22.19.0".
# Verify npm version:
npm -v # Should print "10.9.3".
</code>
          </pre>
        </div>

        <div v-else-if="activeTab === 'frameworks'" class="content-grid single-column">
          <article class="info-card">
            <h3>Vue 3</h3>
            <p>使用现成的工程骨架，专注于给 AI 喂上下文、调页面。</p>
          </article>
          <article class="info-card">
            <h3>React</h3>
            <p>同样的思路可以移植到 React，双框架让 AI 更懂结构。</p>
          </article>
        </div>

        <div v-else-if="activeTab === 'tools'" class="content-grid">
          <article class="tool-card">
            <header>
              <span class="badge paid">订阅</span>
              <h3>Cursor</h3>
            </header>
            <p>把上下文和文件组织交给 Cursor，快速生成草稿。</p>
          </article>
          <article class="tool-card">
            <header>
              <span class="badge paid">订阅</span>
              <h3>Codex</h3>
            </header>
            <p>主力对话模型，提供稳定的多轮改稿体验。</p>
          </article>
          <article class="tool-card">
            <header>
              <span class="badge ai">模型联动</span>
              <h3>Claude Code</h3>
            </header>
            <p>配合国产模型（Kimi、GLM）或本地模型，处理细调和长上下文。</p>
          </article>
        </div>

        <div v-else-if="activeTab === 'models'" class="content-grid scenario">
          <article class="scenario-card">
            <h3>整体框架生成</h3>
            <p>订阅模型（Claude、GPT-5）负责大纲、结构和初版页面。</p>
          </article>
          <article class="scenario-card">
            <h3>页面修改</h3>
            <p>Claude Code + 国产模型（Kimi、GLM）高效完成细节微调。</p>
          </article>
          <article class="scenario-card">
            <h3>局部小改</h3>
            <p>本地模型联合 Claude Code，针对单个组件快速试错。</p>
          </article>
        </div>

        <div v-else class="content-card">
          <h3>示例工程</h3>
          <pre class="code-block" aria-label="示例工程命令">
<code>git clone https://github.com/xiaotianfotos/presentations_by_ai
cd presentations_by_ai
npm install
npm run dev
</code>
          </pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-shell {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: clamp(2.5rem, 7vw, 5.5rem);
}

.panel {
  width: min(100%, 1080px);
  display: flex;
  flex-direction: column;
  gap: clamp(1.8rem, 4vw, 2.8rem);
  padding: clamp(1.8rem, 4vw, 3rem);
  border-radius: clamp(32px, 6vw, 48px);
  background:
    radial-gradient(circle at 12% 16%, rgba(59, 130, 246, 0.12), transparent 55%),
    radial-gradient(circle at 90% 84%, rgba(236, 72, 153, 0.1), transparent 60%),
    linear-gradient(130deg, rgba(255, 255, 255, 0.88), rgba(248, 250, 252, 0.92));
  box-shadow: 0 40px 90px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(18px);
}

.headline-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: center;
}

.headline-group h2 {
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #111827;
}

.headline-group p {
  margin: 0;
  font-size: clamp(1rem, 2.3vw, 1.3rem);
  color: rgba(15, 23, 42, 0.7);
}

.tab-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(0.6rem, 1.8vw, 1rem);
}

.tab-pill {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  background: rgba(255, 255, 255, 0.78);
  color: #1f2937;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.08);
  cursor: pointer;
  transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
}

.tab-pill:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 42px rgba(59, 130, 246, 0.16);
}

.tab-pill.active {
  background: linear-gradient(120deg, rgba(59, 130, 246, 0.92), rgba(14, 165, 233, 0.85));
  color: #f8fafc;
  box-shadow: 0 22px 50px rgba(59, 130, 246, 0.3);
  border-color: transparent;
}

.tab-pill.active .tab-spotlight {
  color: rgba(248, 250, 252, 0.85);
}

.tab-label {
  font-size: 0.9rem;
  letter-spacing: 0.01em;
}

.tab-spotlight {
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(15, 23, 42, 0.55);
}

.tab-content {
  min-height: clamp(320px, 45vh, 420px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-card {
  width: min(100%, 820px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1.4rem, 3vw, 2rem);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
}

.content-card h3 {
  margin: 0;
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  font-weight: 700;
  color: #0f172a;
}

.code-block {
  margin: 0;
  padding: 1.2rem 1.4rem;
  border-radius: 18px;
  background: #0f172a;
  color: #e0f2fe;
  font-size: 0.95rem;
  line-height: 1.6;
  overflow-x: auto;
  box-shadow: inset 0 0 0 1px rgba(148, 163, 184, 0.15);
}

.content-grid {
  width: min(100%, 860px);
  display: grid;
  gap: clamp(1rem, 2vw, 1.4rem);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.content-grid.single-column {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.info-card,
.tool-card,
.scenario-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: clamp(1rem, 3vw, 1.6rem);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.1);
}

.info-card h3,
.tool-card h3,
.scenario-card h3 {
  margin: 0;
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  font-weight: 700;
  color: #111827;
}

.info-card p,
.tool-card p,
.scenario-card p {
  margin: 0;
  font-size: clamp(0.9rem, 2.4vw, 1.05rem);
  line-height: 1.55;
  color: rgba(15, 23, 42, 0.7);
}

.tool-card header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.badge.paid {
  background: rgba(79, 70, 229, 0.16);
  color: rgba(79, 70, 229, 0.9);
}

.badge.ai {
  background: rgba(16, 185, 129, 0.16);
  color: rgba(5, 150, 105, 0.85);
}

.scenario {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

@media (max-width: 768px) {
  .panel {
    padding: 1.6rem;
    border-radius: 28px;
    gap: 1.5rem;
  }

  .tab-bar {
    justify-content: flex-start;
  }

  .tab-pill {
    align-items: flex-start;
  }

  .tab-content {
    min-height: 320px;
  }
}

@media (max-width: 600px) {
  .panel {
    padding: 1.4rem;
  }

  .tab-pill {
    width: 100%;
    align-items: flex-start;
  }

  .tab-content {
    min-height: 300px;
  }
}
</style>
