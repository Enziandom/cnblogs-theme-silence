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
    alpha: 0.85, // 数据区域的透明度
    totalSides: 5, // 多边形面数
    radarLayers: 5, // 雷达层数
    polygonPerStep: 16, // 每一层多边形距离多少
    textColor: "white", // 文本颜色
    data: [ {
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
  statusKey: "growing",
  myLinks: [
    {
      title: "哔哩哔哩",
      href: "https://www.bilibili.com/"
    },
    {
      title: "Vue3",
      href: "https://v3.cn.vuejs.org/"
    },
    {
      title: "Element-Plus",
      href: "https://element-plus.gitee.io/zh-CN/"
    }
  ]
};

export default options;
