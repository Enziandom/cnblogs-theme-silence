function applyCss(dom, styles) {
  for (let key in styles) {
    dom.style.setProperty(key, styles[key]);
  }
}

function obtainCss(dom, names) {
  let properties = [];
  for (let i = 0; i < names.length; i++) {
    let value = dom.style.getPropertyValue(names[i]);
    properties.push({ name: names[i], value });
  }
  return properties;
}

export function setCss(styles) {
  for (let i = 0; i < styles.length; i++) {
    let domName = Object.keys(styles[i])[0];
    applyCss(document.querySelector(domName), styles[i][domName]);
  }
}

export function getCss(dom, styles) {
  return obtainCss(document.querySelector(dom), styles);
}
