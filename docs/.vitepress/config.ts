export default {
    title: '前端开发指南',
    description: '前端开发指南',
    base: '/code-guide/',
    // head: [
    //     ['link', { rel: 'icon', href: '/mfapp/favicon.ico' }]
    // ],
    markdown: {
        lineNumbers: true, //显示代码行数
    },
    lastUpdated: true,
    themeConfig: {
        returnToTopLabel: "返回顶部",
        darkModeSwitchLabel: "外观",
        sidebarMenuLabel: "菜单",
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        },
        // logo: "/logo.png",
        nav: [
            {
                text: "标准规范", 
                link: '/guide/index'
            },
            {
                text: "最佳实践", 
                link: '/experiment/component'
            }
        ],
        outlineTitle: '在本页面',
        lastUpdatedText: '最近更新时间',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present codeteenager'
        },
        smoothScroll: true,
        socialLinks: [{ icon: "github", link: "https://github.com/gray-whale/code-guide/" }],
        sidebar: {
            "/guide/": [
                {
                    text: "开发规范",
                    items: [
                        {
                            text: "概述",
                            link: "/guide/index",
                        }
                    ],
                },
                {
                    text: "绩效标准",
                    items: [
                        {
                            text: "概述",
                            link: "/guide/metris",
                        },
                        {
                            text: "考核方案",
                            link: "/guide/metris-plan",
                        }
                    ],
                }
            ],
            "/experiment/": [
                {
                    text: "最佳实践",
                    items: [
                        {
                            text: "组件设计指南",
                            link: "/experiment/component",
                        },
                        {
                            text: "前端设计文档规范",
                            link: "/experiment/design-docs",
                        }
                    ],
                }
            ],
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
}