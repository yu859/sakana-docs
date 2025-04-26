import { defineConfig } from 'vitepress';
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/sakana-docs/', //这里一定要记得写，不然样式会出问题，然后写上自己的仓库名
  head: [
    ['link', { rel: 'icon', href: '/sakana-docs/gaituba.com_crop-round.jpg' }], //浏览器图标，记得写前面那个仓库名
  ],
  title: 'Sakana-Docs', //标题
  description: 'Sakana-Docs', //描述
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [groupIconVitePlugin()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '目录', //目录标题
    outline: [2, 6], //目录深度
    logo: '/gaituba.com_crop-round.jpg', //logo
    nav: [
      //导航栏
      { text: '首页', link: '/' },
      { text: '文档', link: '/vitepress搭建并部署' },
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
        items: [{ text: 'vitepress搭建并部署', link: '/vitepress搭建并部署' }],
      },
    ],
    // sidebar: false, //侧边栏
    // aside: 'left', //侧边栏位置

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yu859/sakana-docs' },
    ], //社交链接

    footer: {
      //底部
      copyright: 'Sakana Docs',
    },
  },
});
