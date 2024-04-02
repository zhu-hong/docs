import { defineConfig } from 'vitepress'

export default defineConfig({
  base: './',
  title: "D2M Classic Docs",
  description: "添翼文档网站",
  themeConfig: {
    logo: '/logo.svg',
    sidebar: [
      {
        text: '编码规范',
        items: [
          { text: '代码风格', link: '/code-style' },
          { text: '项目结构', link: '/project-structure' },
        ],
      },
      {
        text: 'Code Snippet',
        items: [
          { text: '代码片段', link: '/code-snippet' },
        ],
      },
    ],
  },
})
