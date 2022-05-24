<div align="center">
  <img align="center" src="./docs/_media/icon.svg">
  <h2 align="center">
    CNBLOGS THEME SILENCE
  </h2>
  <p align="center">
    专 注 于 阅 读 的 博 客 园 主 题
  </p> 

[文档](https://gitee.com/shiramashiro/cnblogs-theme-silence) | [演示](https://www.cnblogs.com/shiramashiro)

</div>

## 安装

页面定制 CSS 代码处：
```css
@import url(https://shiramashiro.gitee.io/cnblogs-theme-silence/dist/silence.min.css);
```

页首 HTML 代码处：

```html
<div class="dark-loading">
  <div class="box">
    <h2>Loading</h2>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
</div>
```

侧边栏公告处：

```html
<script>
window.$silence = {
    avatar: 'https://images.cnblogs.com/cnblogs_com/blogs/666252/galleries/1934022/o_210616040311shinamashiro.jpg',
    github: 'https://github.com/shiramashiro',
    favicon: 'https://images.cnblogs.com/cnblogs_com/blogs/666252/galleries/1934022/o_210616040608shiramashiro-round.png',
    catalog: {
        index: true,
        enable: true,
        levels: ['h1', 'h2', 'h3']
    },
    defaultMode: 'dark',
    navbars: [{
        title: '标签',
        url: 'https://www.cnblogs.com/shiramashiro/tag/'
    }],
    hljsln: true,
    radarMap: {
        alpha: 0.88,
        sides: 10,
        layer: 5,
        step: 14,
        lineWidth: 1,
        lineColor: 'white',
        textColor: 'white',
        textSize: 12,
        data: [
            {
                title: 'html',
                star: 5,
            },
            {
                title: 'css',
                star: 4,
            },
            {
                title: 'js',
                star: 4,
            },
            {
                title: 'ts',
                star: 1,
            },
            {
                title: 'vue',
                star: 3,
            },
            {
                title: 'react',
                star: 1,
            },
            {
                title: 'angular',
                star: 0,
            },
            {
                title: 'nodejs',
                star: 1,
            },
            {
                title: '小程序',
                star: 4,
            },
            {
                title: 'flutter',
                star: 3,
            }
        ]
    }
}
</script>
<script src="https://shiramashiro.gitee.io/cnblogs-theme-silence/dist/silence.min.js"></script>
```

## 特性

- 界面简洁优雅。
- 响应式网页设计。(目前正在改造中...)
- 容易使用并且轻量。
- 代码简单且可高度定制。
- 支持多种色彩主题。
- 支持日间/夜间模式。(目前正在改造中...)
- 支持自定义导航栏菜单项。
- 支持悬浮标题目录。
- 支持生成文章版权签名。
- 提供赞赏功能。

## 开发

项目采用主流的前端模块化工具构建，熟悉前端开发的园友可参考下面的命令进行二次开发，定制化属于自己的独特主题风格。

```
git clone git@github.com:shiramashiro/cnblogs-theme-silence.git // 克隆代码
cd cnblogs-theme-silence                                        // 进入目录
npm install                                                     // 安装依赖
npm start                                                       // 本地调试
npm run build                                                   // 编译生成
```