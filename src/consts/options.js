const options = {
  version: "3.0.0",
  avatar: null,
  favicon: null,
  github: null,
  defaultMode: "dark",
  defaultTheme: "a",
  customNavbarItemList: [ {
    title: "标签",
    url: "https://www.cnblogs.com/shiramashiro/tag/"
  } ],
  showNavAdmin: true,
  hljsln: false,
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
    sides: 6, // 多边形面数
    layer: 5, // 雷达层数
    step: 15, // 每一层多边形距离多少
    lineWidth: 1, // 雷达图线宽
    textSize: 14, // 文本大小
    lineColor: "#A7A7A7", // 雷达图线颜色
    textColor: "#A7A7A7", // 文本颜色
    data: [ // 数据
      { title: "js", star: 4 }, { title: "ts", star: 2 }, { title: "html", star: 4 },
      { title: "css", star: 4 }, { title: "vue", star: 4 }, { title: "JQ", star: 4 }
    ]
  },
  statusKey: "growing",
  myLinks: [
    {
      title: "Vue3",
      href: "https://v3.cn.vuejs.org/"
    },
    {
      title: "Element-Plus",
      href: "https://element-plus.gitee.io/zh-CN/"
    }
  ],
  niceBooks: [
    {
      title: "《JavaScript权威指南》",
      cover: "https://img0.baidu.com/it/u=3565672953,1063732653&fm=253&fmt=auto&app=138&f=JPEG?w=381&h=499",
      author: "(美)弗拉纳根"
    }
  ]
};

export default options;
