const options = {
  version: "3.0.0",
  avatar: null,
  favicon: null,
  github: null,
  defaultMode: "dark",
  defaultTheme: "a",
  customNavbarItemList: [ {
    title: "标签",
    url: "https://www.cnblogs.com/esofar/tag/"
  }, {
    title: "朋友",
    chilren: [ {
      title: "百度",
      target: "_blank",
      url: "https://www.baidu.com"
    }, {
      title: "谷歌",
      target: "_blank",
      url: "https://www.google.com"
    } ]
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
    alpha: 0.85,
    sides: 5,
    layer: 5,
    step: 16,
    lineWidth: 1,
    lineColor: "white",
    textColor: "white",
    textSize: 14,
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
  statusKey: "growing"
};

export default options;
