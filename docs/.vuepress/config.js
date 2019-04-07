module.exports = {
    title: '小demo',
    description: 'vuepress',
    head: [
        ['link', { rel: 'icon', href: '/1.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/vuepress-demo/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上
        sidebar: {
            '/demo/': [
                {
                    title: 'markdown',
                    collapsable: false,
                    children: [
                        ['/demo/markdown扩展.md', 'markdown扩展'],
                        ['/demo/在markdown中使用vue.md', 'markdown中使用vue']
                    ]
                },
            ]
        },
        nav: [
            {
                text: '选择',
                items: [
                    { text: '中文', link: '/' },
                    { text: '还是中文', link: '/' }
                ]
            },
            { text: '首页', link: '/' },
            { text: 'markdown', link: '/demo/markdown扩展' }
        ],
    }
}
