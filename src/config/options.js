const options = {
  version: "3.0.0",
  avatar: null,
  favicon: null,
  github: null,
  navs: [{ title: "标签", url: "https://www.cnblogs.com/Enziandom/tag" }],
  defaultMode: "auto",
  defaultTheme: "a",
  hljsln: true,
  catalog: {
    pcAutoOpen: true,
    pmdAutoOpen: false,
    index: true,
    enbale: true,
    levels: ["h1", "h2", "h3"]
  },
  signature: {
    enable: true,
    author: null,
    license: ["署名-非商业性使用-相同方式共享 4.0 国际", "https://creativecommons.org/licenses/by-nc-sa/4.0/"],
    remark: null
  },
  sponsor: {
    enable: false,
    text: "Buy me a cup of coffee ☕.",
    paypal: null,
    wechat: null,
    alipay: null
  },
  radarMap: {
    iscollapse: false,
    alpha: 0.85,
    sides: 6,
    layer: 5,
    step: 15,
    lineWidth: 1,
    textSize: 14,
    lineColor: "#A7A7A7",
    textColor: "#A7A7A7",
    data: [
      { title: "js", star: 4 },
      { title: "ts", star: 2 },
      { title: "html", star: 4 },
      { title: "css", star: 4 },
      { title: "vue", star: 4 },
      { title: "jq", star: 4 }
    ]
  },
  statusKey: "busyness",
  myLinks: {
    iscollapse: true,
    data: [
      {
        title: "Vue3",
        href: "https://v3.cn.vuejs.org/"
      }
    ]
  },
  niceBooks: {
    iscollapse: true,
    data: [
      {
        title: "《JavaScript权威指南》",
        cover: "https://img0.baidu.com/it/u=3565672953,1063732653&fm=253&fmt=auto&app=138&f=JPEG?w=381&h=499",
        author: "(美)弗拉纳根"
      }
    ]
  },
  pageOps: {
    contentWidth: 0.65,
    siderbarWidth: 0.18
  },
  postFontOps: {
    min: 16,
    max: 20
  },
  menuOps: {
    signature: "Time tick away, dream faded away!",
    width: 247,
    bottomBtns: []
  },
  gitlab: null,
  gitee: null,
  backgroundOps: {
    url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.netbian.com%2Fuploads%2Fallimg%2F171119%2F201449-15110936893e55.jpg&refer=http%3A%2F%2Fpic.netbian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666245447&t=620a20cac5ef37b36f485d7dd9ee0e68",
    opacity: 0.2,
    mainOpacity: 0.95
  }
};

export default options;
