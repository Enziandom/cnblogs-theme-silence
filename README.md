# 主题介绍

<div align="center">
  <h2 align="center">
    CNBLOGS THEME SILENCE
  </h2>
  <p align="center">
    专 注 于 阅 读 的 博 客 园 主 题
  </p>

[文档](https://www.cnblogs.com/Enziandom/p/16329011.html) | [演示](https://www.cnblogs.com/Enziandom)

</div>

二次开发，定制化属于自己的独特主题风格：

```
git clone git@github.com:Enziandom/cnblogs-theme-silence.git // 克隆代码
cd cnblogs-theme-silence                                        // 进入目录
npm install                                                     // 安装依赖
npm start                                                       // 本地调试
npm run build                                                   // 编译生成
```

# 安装皮肤

在安装博客园皮肤之前，你必须要开启 JS 权限、CSS 权限。

## 修改默认博客皮肤

<img src="https://img2022.cnblogs.com/blog/2271881/202205/2271881-20220531020324517-138076240.png" desc="修改博客园皮肤为 Custom" />

## 代码高亮

你的博客圆代码高亮必须是 highlight.js，主题样式选择 atom-one-dark：

<img src="https://img2022.cnblogs.com/blog/2271881/202205/2271881-20220531020403901-2025782736.png" desc="设置博客园代码高亮为 highlight" />

## 页面定制 CSS 代码

```css
@import url(https://Enziandom.gitee.io/cnblogs-theme-silence/dist/silence.min.css);
```

## 博客侧边栏公告

```html
<script>
  window.$silence = {};
</script>
<script src="https://Enziandom.gitee.io/cnblogs-theme-silence/dist/silence.min.js"></script>
```

## 首页 HTML 代码

```html
<div class="dark-loading">
  <div class="box">
    <h2>Loading</h2>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
</div>
```

# 配置选项

有一些选项在[原主题文档](http://esofar.gitee.io/cnblogs-theme-silence/#/options)中有说明，在这里我就不过多赘述。这个随笔用于说明新增添的配置选项，也有可能改变了原主题的配置选项，我尽量不去修改。

## 头像状态

`statusKey`是头像状态的配置项。在你的首页头像处的右下角可以展示你当前的状态。可选配置项：

| 选项     | 说明   | 描述                                |
| :------- | :----- | :---------------------------------- |
| activity | 活跃中 | 显示的颜色 rgba(66, 185, 131, 0.95) |
| busyness | 忙碌中 | 显示的颜色 rgba(255, 69, 0, 0.95)   |
| growing  | 升级中 | 显示的颜色 rgba(240,230,140, 0.95)  |
| idle     | 摸鱼中 | 显示的颜色 rgba(112,128,144, 0.95)  |

```js
window.$silence = {
  statusKey: "idle"
};
```

## 文章目录

文章目录有四个可选的配置，默认显示目录的索引，最多可以显示 3 层目录，pc 端默认自动打开目录，移动端默认不自动打开目录。

```js
window.$silence = {
  catalog: {
    pcAutoOpen: true,
    pmdAutoOpen: false,
    index: true,
    enbale: true,
    levels: ["h1", "h2", "h3"]
  }
};
```

## 技能雷达

技能雷达展示你当前掌握的技术程度，下面是基本的配置项：

```js
window.$silence = {
  radarMap: {
    iscollapse: false,
    alpha: 0.85, // 数据区域透明度
    sides: 6, // 多边形面数
    layer: 5, // 雷达层数
    step: 15, // 每一层多边形距离多少
    lineWidth: 1, // 雷达图线宽
    lineColor: "#A7A7A7", // 雷达图线颜色
    textSize: 14, // 文本大小
    textColor: "#A7A7A7", // 文本颜色
    data: [
      // 数据
      { title: "js", star: 4 },
      { title: "ts", star: 2 },
      { title: "html", star: 4 },
      { title: "css", star: 4 },
      { title: "vue", star: 4 },
      { title: "jq", star: 4 }
    ]
  }
};
```

`iscollapse`设置为 true 表示默认是折叠状态；false 默认为展开状态。

## 常用链接

`myLinks`是常用链接的配置项。主要目的是收藏自己常用的网址，更多的是添加一些开发手册等等。

```js
window.$silence = {
  myLinks: {
    iscollapse: false,
    data: [
      {
        title: "Vue3",
        href: "https://v3.cn.vuejs.org/"
      }
    ]
  }
};
```

`iscollapse`设置为 true 表示默认是折叠状态，如果数据较多，可以选择默认折叠；false 默认为展开状态。

## 推荐书籍

`niceBooks`是推荐书籍的配置项。主要目的是收藏自己所读的书籍，推荐给大家。

```js
window.$silence = {
  niceBooks: {
    iscollapse: false,
    data: [
      {
        title: "《JavaScript权威指南》",
        cover: "https://img0.baidu.com/it/u=3565672953,1063732653&fm=253&fmt=auto&app=138&f=JPEG?w=381&h=499",
        author: "(美)弗拉纳根"
      }
    ]
  }
};
```

`iscollapse`设置为 true 表示默认是折叠状态，如果数据较多，可以选择默认折叠；false 默认为展开状态。

## 设置导航栏

`navs`是自定义导航栏的配置选项。

```js
window.$silence = {
  navs: [
    {
      title: "标签",
      href: "https://www.cnblogs.com/Enziandom/tag/"
    }
  ]
};
```

## 图片描述

博客园 markdown 支持 HTML 标签插入图片，在标签添加`desc`可以给图片添加“描述”。

```html
<img src="your picture url" desc="这是图片描述..." />
```

## Mini 菜单栏

Mini 菜单栏的最上方支持添加你的个性签名或者其他文字描述，最大的作用体现在移动端。菜单栏默认的宽度是 247 px。

```js
window.$silence = {
  menu: {
    signature: "Time tick away, dream faded away!",
    width: 247
  },
  github: "",
  gitlab: "",
  gitee: ""
};
```

## 设置页面宽度

左右两边侧边栏的宽度、头部的宽度以及内容的宽度都可以根据喜好调整：

```js
window.$silence = {
  pageOps: {
    contentWidth: 0.65,
    siderbarWidth: 0.18
  }
};
```

`contentWidth`代表内容、头部的宽度系数，`sidebarWidth`代表左右两边侧边栏的宽度系数。

## 文章字体区间

文章页可以通过标题右边的按钮修改文章字体显示的大小，默认是 16~20 之间，达到最大值自动回归到默认最小值。

```js
window.$silence = {
  postFontOps: {
    min: 16,
    max: 20
  }
};
```

## 博客背景图片

给你的博客设置一个或多个背景图片，urls 设置为 null 时，不设置背景图片。

```js
window.$silence = {
  backgroundOps: {
    urls: null,
    // urls: ['image01', 'image02']
    blur: 4,
    bgOpacity: 1,
    mainOpacity: 0.9,
    objectFit: "cover"
  }
};
```

bgOpacity 表示除背景的透明度；blur 表示图片的模糊度；mainOpacity 表示背景以外的透明度；objectFit 表示背景图片的适应模式，与 CSS 的 object-fit 属性相同。

# 开发日志

2022 年 8 月 26 日：删除原主题皮肤手机版菜单栏的功能，添加新版的菜单侧边功能，拥有更多的信息和可操作按钮。

2022 年 8 月 27 日：

- 删除原主题皮肤的小工具，新的小工具靠着右边固定，可关闭。
- 新增 PC 端文章页可以呼出菜单栏的功能，非文章页不可以呼出该面板。
- 页面可显示内容和宽度根据自己的喜好调整。

2022 年 8 月 28 日：文章标题下展示文章数据。

2022 年 8 月 30 日：文章标题添加文章字体调节按钮。

2022 年 8 月 31 日：文章目录跟随标题滑动添加样式提示。

2022 年 9 月 20 日：可以设置背景图片，且背景图片以及内容区域的透明度可调节。背景图片可以随机变化。

2022 年 9 月 30 日：左侧边栏可以折叠，展示更多内容。

2022 年 10 月 26 日：文章 li 标签、标题、p 标签内的文本内容可以 break-word，减少突兀的感觉。
