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

# 安装

请按照以下几个步骤操作，简单几步就可以换上新皮肤。

## 页面定制 CSS 代码处

```css
@import url(https://shiramashiro.gitee.io/cnblogs-theme-silence/dist/silence.min.css);
```

## 页首 HTML 代码处

```html
<div class="dark-loading">
  <div class="box">
    <h2>Loading</h2>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
</div>
```

## 侧边栏公告处

```html
<script>
window.$silence = {
  version: "3.0.0",
  avatar: null,
  favicon: null,
  github: null,
  defaultMode: "dark",
  defaultTheme: "a",
  customNavbarItemList: [ {
    title: "标签",
    url: "https://www.cnblogs.com/esofar/tag/"
  } ],
  showNavAdmin: true,
  hljsln: true,
  catalog: {
    index: true, enbale: true, levels: [ "h1", "h2", "h3" ]
  },
  signature: {
    enable: true,
    author: null,
    license: [ "署名-非商业性使用-相同方式共享 4.0 国际", "https://creativecommons.org/licenses/by-nc-sa/4.0/" ],
    remark: null
  },
  sponsor: {
    enable: false, text: "Buy me a cup of coffee ☕.", paypal: null, wechat: null, alipay: null
  },
  radarMap: {
    alpha: 0.85, // 数据区域透明度
    sides: 5, // 多边形面数
    layer: 5, // 雷达层数
    step: 16, // 每一层多边形距离多少
    lineWidth: 1, // 雷达图线宽
    lineColor: "white", // 雷达图线颜色
    textSize: 14, // 文本大小
    textColor: "white", // 文本颜色
    data: [ { // 数据
      title: "js", star: 4
    }, {
      title: "ts", star: 2
    }, {
      title: "html", star: 4
    }, {
      title: "css", star: 4
    }, {
      title: "vue", star: 4
    } ]
  },
  statusKey: "growing" // 博主状态
};
</script>
<script src="https://shiramashiro.gitee.io/cnblogs-theme-silence/dist/silence.min.js"></script>
```

# 配置选项

## 头像状态

`statusKey`是头像状态的配置项，其可选参数有：

1. activity：活跃中，显示的颜色 rgba(66, 185, 131, 0.95)
2. busyness：忙碌中，显示的颜色 rgba(255, 69, 0, 0.95)
3. growing：升级中，显示的颜色 rgba(240,230,140, 0.95)
4. idle：摸鱼中，显示的颜色 rgba(112,128,144, 0.95)

比如：

```js
window.$silence = {
  statusKey: 'idle'
}
```

## 雷达图

`radarMap`是雷达图的配置项，可选参数见上面的案例。

## 其余配置项

其他的配置项可以参考原版本主题文档：[参数选项参考文档](https://esofar.gitee.io/cnblogs-theme-silence/#/options)。

# 特性

本主题皮肤重构了原版本的主题。在未来，修改布局，提升阅读。到目前为止<sup>2022年5月28日</sup>，修改了大量的细节，增加了一些有趣的功能。

- 界面简洁优雅。(目前正在改造中...)
- 响应式网页设计。(目前正在改造中...)
- 容易使用并且轻量。
- 代码简单且可高度定制。
- 支持多种色彩主题。
- 支持日间/夜间模式。(目前正在改造中...)
- 支持自定义导航栏菜单项。
- 支持悬浮标题目录。
- 支持生成文章版权签名。
- 提供赞赏功能。

# 开发

项目采用主流的前端模块化工具构建，熟悉前端开发的园友可参考下面的命令进行二次开发，定制化属于自己的独特主题风格。

```
git clone git@github.com:shiramashiro/cnblogs-theme-silence.git // 克隆代码
cd cnblogs-theme-silence                                        // 进入目录
npm install                                                     // 安装依赖
npm start                                                       // 本地调试
npm run build                                                   // 编译生成
```