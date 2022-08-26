export function setCssByElementName(elementName, properties) {
  setCss(document.querySelector(elementName), properties);
}

export function getCssByElementName(elementName, names) {
  return getCss(document.querySelector(elementName), names);
}

export function setCssByElementId(elementId, properties) {
  setCss(document.getElementById(elementId), properties);
}

export function getCssByElementById(elementId, names) {
  return getCss(document.getElementById(elementId), names);
}

function setCss(dom, properties) {
  for (let key in properties) {
    dom.style.setProperty(key, properties[key]);
  }
}

function getCss(dom, names) {
  let properties = [];
  for (let i = 0; i < names.length; i++) {
    let value = dom.style.getPropertyValue(names[i]);
    properties.push({ name: names[i], value });
  }
  return properties;
}
