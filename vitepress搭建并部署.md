# vitepress 搭建并部署

## 创建项目

接下来开始我们的搭建步骤，对于开源项目，肯定是直接看官网和一些最佳实践了

vitepress 官网地址：https://vitepress.dev/

### 安装 vitepress

首先，我们创建一个项目，然后安装 `vitepress`
编辑器我使用的是 `vscode`，你也可以使用其他编辑器

::: code-group

```bash [npm]
npm add -D vitepress
```

```bash [pnpm]
pnpm add -D vitepress
```

```bash [yarn]
yarn add -D vitepress
```

:::

### 初始化 Vitepress

::: code-group

```bash [npm]
npx vitepress init
```

```bash [pnpm]
pnpm vitepress init
```

```bash [yarn]
yarn vitepress init
```

:::

简单说一下配置

- 第一个是在当前根目录下创建 vitepress 项目
- 第二个和第三个是站点标题和描述。后续可以在配置中修改
- 第四个是主题，建议选择第二个，它的样式会更好看点个人觉得，而且可以进行自定义配置
- 第五个是是否使用 Ts，我不是很会所以我选择 NO
- 第六个是否要将 VitePress 的命令添加到 package.json 文件中，选 YES，方便一点

![image](./vitepress-init.png)

- `.vitepress`，最核心的目录
- `theme` 目录，自定义主题配置，css 样式等
- `config.mjs` 最核心的文件，各种配置导航栏、侧边栏、标题什么的都是在这里
- `node_modules` 安装的依赖
- `api-examples.md` 和 `markdown-examples.md` 官方给的两个示例
- `index.md` 主页相关
- `package.json` 和 `pnpm-lock.yml` 包管理工具需要用的

![image](./vitepress-project.png)

### 启动项目

::: code-group

```bash [npm]
npm run docs:dev
```

```bash [pnpm]
pnpm docs:dev
```

```bash [yarn]
yarn docs:dev
```

:::

看到这样就说明启动成功了

![image](./vitepress-run.png)

## 自定义配置

### 美化主页

以下就是要美化的东西

![image](./vitepress-home.png)

首先是第 1、7、8 处

::: code-group

```js [config.mjs]
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'sakana的文档', //第1处左上角标题
  description: 'A VitePress Site', //描述
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }, //第7处，后面可以换成其他文档的链接
      { text: '文档', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ], //第8处，这里可以写你的GitHub地址
  },
});
```

:::

然后是第 2、3、4、5、6 处以及 logo

::: code-group

```md [index.md]
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # 第2处
  name: 'Sakana-Docs'
  # 第3处
  text: '一个基于VitePress的文档项目'
  # 第4处
  tagline: 计算机小白持续学习
  # 这里是右边的大logo
  image:
    src: /gaituba.com_crop-round.jpg
    alt: Sakana-Docs
  # 第5处按钮theme可以改其他按钮样式
  actions:
    - theme: brand
      text: 开始使用
      link: /markdown-examples
    - theme: alt
      text: api示例
      link: /api-examples

# 下面是第6处
features:
  - icon: 💡
    title: 建议
    details: 选择永远大于努力
  - icon: 💪
    title: 努力
    details: 要做一件事就努力做好
  - icon: 🤔
    title: 思考
    details: 让自己静下心来思考
---
```

:::

下面是最终效果图

![image](./vitepress-01.png)

注意：vitepress 支持的图标较少，社交连接的图标可以参考这个网站 https://www.iconfont.cn/

选择想要的图标后复制 svg 代码就行

::: code-group

```js [config.mjs]
socialLinks: [
  { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
  {
    icon: {
      svg: '代码粘贴在这里',
    }, //注意是对象写法
    link: 'https://github.com/vuejs/vitepress',
  },
]; //第8处，这里可以写你的GitHub地址
```

:::

还有如果觉得颜色不好看，你可以在 style.css 中修改

这里我修改了渐变颜色，你也可以修改角度、全局颜色、模糊度等

注意是替换到有颜色的地方

::: code-group

```css [style.css]
:root {
  --vp-home-hero-name-color: transparent;
  /* 渐变颜色 这里是左边字体的颜色*/
  --vp-home-hero-name-background: -webkit-linear-gradient(
    120deg,
    #8e99ee 30%,
    #ffffff
  );
  /* 渐变颜色 这里是右边图片的背景颜色*/
  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #8e99ee 50%,
    #ffffff 50%
  );
  --vp-home-hero-image-filter: blur(44px);
}
```

:::

### 美化文章页

默认进来官方给的示例是三边栏的

左边是 sidebar 的配置，右边是显示的文章目录（默认显示一二级）。

![image](./vitepress-02.png)

简单说一下配置

::: code-group

```js [config.mjs]
sidebar: [
  {
    text: 'Examples',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' },
    ],
  },
  {
    text: 'Examples1',
    items: [
      { text: 'Markdown Examples1', link: '/markdown-examples' },
      { text: 'Runtime API Examples1', link: '/api-examples' },
    ],
  },
];
```

:::

下面是修改后的效果图

![image](./vitepress-03.png)

### 美化网址图标

现在网址的图标是这样的

![image](./vitepress-04.png)

::: code-group

```js [config.mjs]
  title: 'sakana的文档', //第1处左上角标题
  description: 'A VitePress Site', //描述
  head: [['link', { rel: 'icon', href: '/gaituba.com_crop-round.jpg' }]]//网页图标
```

:::

修改后效果图

![image](./vitepress-05.png)

### 设置搜索框

在 `config.mjs` 中的 `themeConfig` 中添加
::: code-group

```js [config.mjs]
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
```

:::

## 使用 Github Pages 部署

Github Pages 专门用来托管静态内容，由于不需要服务器且基于 git，支持 CI/CD，成为很多静态网站比如博客、文档网站的很好的选择

### 部署流程

注册 Github 账号这里就不多说了，还有创建仓库只要不设置私有就行

首先就是在 config.mjs 中添加 base，在网页图标路径前面加上仓库名

::: code-group

```js [config.mjs]
base: '/sakana-docs/', //这里一定要记得写，不然样式会出问题，然后写上自己的仓库名
```

:::

::: code-group

```js [config.mjs]
head: [
  ['link', { rel: 'icon', href: '/sakana-docs/gaituba.com_crop-round.jpg' }],
]; //浏览器图标，记得写前面那个仓库名
```

:::

然后创建 git 仓库

```bash
git init
```

创建.gitignore 文件，可以参考我的或者按需写

::: code-group

```bash [.gitignore]
node_modules
.vitepress/cache
.vitepress/dist
dist
.DS_Store
*.log
.temp
.cache
.env
.env.*
!.env.example
```

:::

创建.github/workflows/deploy.yml 文件或者.yaml 文件，这两个文件都可以，我这里用的是 yml 文件

这里是设置工作流，可以参考我的，也可以参考官方的，使用官方的记得修改里面的命令、分支名称等

注意：目录层级结构要正确，文件里面的命令、分支名称根据自己的情况来选择

::: code-group

```bash [deploy.yml]
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [main]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消此区域注释
        with:
          version: 9
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: pnpm install # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: pnpm docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

:::

添加到 git 仓库

```bash
git add .
```

创建第一次提交

```bash
git commit -m "first commit" //-m 后面写提交信息
```

添加远程仓库地址到本地

```bash
git remote add origin 地址 //这里写自己的远程仓库地址
```

推送到远程仓库

```bash
git push -u origin main //-u 是设置默认分支，main 是分支名称
```

然后在 setting 中设置 github pages，这里在 Source 选择 Github Actions 方式

你也可以选择从分支部署或使用混和部署，但是需要自己设置

![image](./GitHubPages.png)

之后等待工作流运行完成，就可以访问了

## 补充

这个文档还对原本的 css 样式进行了修改，有兴趣可以自行复制，主要有导航栏的线条隐藏和导航栏毛玻璃效果等
