import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ai-notebook/',   // ← 加这一行，注意前后都有斜杠
  title: "Learning AI from scratch",
  description: "从零开始学AI",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '小白入门', link: '/AI从零开始：小白进阶手册.md' },
      { text: '进阶实战', link: '/AI进阶实战：从算法原理到系统架构.md' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '从零开始：小白入门手册', link: '/AI从零开始：小白进阶手册.md' },
          { text: '进阶实战：从算法到架构', link: '/AI进阶实战：从算法原理到系统架构.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maggiec87/ai-notebook' }
    ],

    // 开启本地搜索（内置，无需插件）
    search: {
      provider: 'local'
    }
  }
})