const options = {
  version: "3.0.0",
  avatar: null,
  favicon: null,
  github: null,
  defaultMode: "auto",
  defaultTheme: "a",
  navbars: [],
  showNavAdmin: true,
  hljsln: false,
  catalog: {
    enable: false,
    index: true,
    active: false,
    levels: ["h2", "h3", "h4"],
  },
  signature: {
    enable: true,
    author: null,
    license: [
      "署名-非商业性使用-相同方式共享 4.0 国际",
      "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    ],
    remark: null,
  },
  sponsor: {
    enable: false,
    text: "Buy me a cup of coffee ☕.",
    paypal: null,
    wechat: null,
    alipay: null,
  },
  personBoard: {
    tag: "<span>板子</span>",
    title: `<div>README</div>`,
    content: `<div>近期目标：进阶成为 Web 大神</div>`,
    signature: `<span>time tick away, dream faded away!</span>`,
  },
};

export default options;
