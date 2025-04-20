import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/gaituba.com_crop-round.jpg' }]],
  title: 'Sakana-Docs', //标题
  description: 'Sakana-Docs', //描述
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '目录', //目录标题
    outline: [2, 6], //目录深度
    logo: '/gaituba.com_crop-round.jpg', //logo
    nav: [
      //导航栏
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索', //搜索按钮文本
            buttonAriaLabel: '搜索', //搜索按钮aria标签
          },
          modal: {
            //搜索框
            noResultsText: '无法找到相关结果', //无法找到相关结果时的文本
            resetButtonTitle: '清除查询条件', //清除查询条件
            footer: {
              //底部
              selectText: '选择', //选择
              navigateText: '切换', //切换
            },
          },
        },
      },
    },

    sidebar: [
      //侧边栏
      {
        text: '文档',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    // sidebar: false, //侧边栏
    // aside: 'left', //侧边栏位置

    socialLinks: [{ icon: 'github', link: 'https://github.com/yu859' }], //社交链接

    footer: {
      //底部
      copyright: 'Sakana Docs',
    },
  },
});
