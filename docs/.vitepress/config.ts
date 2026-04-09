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
      { text: '小白入门', link: '/basic.md' },
      { text: '进阶实战', link: '/advanced.md' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '从零开始：小白入门手册', link: '/basic.md' },
          { text: '进阶实战：从算法到架构', link: '/advanced.md' }
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