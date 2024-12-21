export default {
    title: '前端开发指南',
    description: '前端开发指南',
    base: '/code-guide/',
    head: [
        // ['link', { rel: 'icon', href: '/mfapp/favicon.ico' }]
        [
            'script',
            { charset: 'utf-8', async: '', src: 'https://readmore.openwrite.cn/js/readmore.js' }
        ],
        [
            'script',
            { charset: 'utf-8', async: '', src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }
        ],
    ],
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
            message: '<span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次，本站总访客数<span id="busuanzi_value_site_uv"></span>人次</span><br/>Released under the MIT License.',
            copyright: 'Copyright © 2022-present codeteenager'
        },
        smoothScroll: true,
        socialLinks: [{ icon: "github", link: "https://github.com/gray-whale/code-guide/" }],
        sidebar: {
            "/guide/": [
                {
                    text: "开发规范",
                    collapsed: false,
                    items: [
                        {
                            text: "概述",
                            link: "/guide/index",
                        },
                        {
                            text: "命名规范",
                            link: "/guide/naming-rules",
                        },
                        {
                            text: "HTML规范",
                            link: "/guide/html",
                        },
                        {
                            text: "CSS规范",
                            link: "/guide/css",
                        },
                        {
                            text: "LESS规范",
                            link: "/guide/less",
                        },
                        {
                            text: "JavaScript规范",
                            link: "/guide/javascript",
                        },
                        {
                            text: "Vue项目规范",
                            link: "/guide/vue",
                        },
                        {
                            text: "提交规范",
                            link: "/guide/commit",
                        },
                    ],
                },
                {
                    text: "工作流规范",
                    collapsed: false,
                    items: [
                        {
                            text: "版本规范",
                            link: "/guide/git-version",
                        },
                        {
                            text: "Git分支模型",
                            link: "/guide/git-branch",
                        },
                        {
                            text: "提交信息规范",
                            link: "/guide/git-changelog",
                        },
                        {
                            text: "Bug处理规则",
                            link: "/guide/git-bug",
                        },
                        {
                            text: "如何处理定制化需求",
                            link: "/guide/git-custom",
                        }
                    ],
                },
                {
                    text: "Restful接口规范",
                    link: "/guide/restful",
                },
                {
                    text: "绩效标准",
                    collapsed: false,
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