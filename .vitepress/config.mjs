import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "markdown",
  title: "Intervue",
  description: "Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '-',
        items: [
          { text: 'Структура', link: '/structur' },
          { text: 'PHP Основы', link: '/php-base' },
          { text: 'ООП в PHP', link: '/php-oop' },
          { text: 'PHP продвинутое', link: '/php-advanced' },
          { text: 'Git', link: '/git' },
          { text: 'Laravel', link: '/laravel' },
          { text: 'Laravel advanced', link: '/laravel-advanced' },
          { text: 'SQL & Databases', link: '/sql-basics' },
          { text: 'Testing', link: '/testing' },
          { text: 'Security', link: '/security.md' },
          { text: 'Api development', link: '/api-development.md' },
          { text: 'Docker', link: '/docker.md' },
          { text: 'Database advanced', link: '/database-advanced.md' },
          { text: 'Database optimization', link: '/database-optimization.md' },
          { text: 'Caching', link: '/caching.md' },
          { text: 'Performance', link: '/performance.md' },
          { text: 'Principles', link: '/principles.md' },
          { text: 'Architecture patterns', link: '/architecture-patterns.md' },
          { text: 'Design Patterns', link: '/design-patterns.md' },
          { text: 'Message Brokers', link: '/message-brokers.md' },
          { text: 'Microservices', link: '/microservices.md' },
          { text: 'Soft Skills', link: '/soft-skills.md' },
          
          //{ text: 'Markdown Examples', link: '/markdown-examples' },
          //{ text: 'Runtime API Examples', link: '/api-examples' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
