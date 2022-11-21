import options from "../config/options";

export const themeColors = {
  a: { color: "#2D8CF0", color2: "#79A2DC" },
  b: { color: "#FA7298", color2: "#E7B6C4" },
  c: { color: "#42B983", color2: "#89D7B2" },
  d: { color: "#607D8B", color2: "#A7C3D5" },
  e: { color: "#5E72E4", color2: "#8794DA" },
  f: { color: "#FF9700", color2: "#E0BF95" },
  g: { color: "#FF5722", color2: "#E1AA97" },
  h: { color: "#009688", color2: "#83E0D0" },
  i: { color: "#673BB7", color2: "#A283D9" },
  j: { color: "#906F61", color2: "#E1865E" }
};

export function getTheme() {
  return localStorage.getItem(`silence-theme-${currentBlogApp}`) || options.defaultTheme;
}

export function setTheme(theme) {
  localStorage.setItem(`silence-theme-${currentBlogApp}`, theme);
  $("html").attr("theme", theme);
}

export function getAutoMode() {
  if (!getMode()) setMode("auto");

  if (getMode() === "auto") {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark";
  } else return getMode();
}

export function getMode() {
  return localStorage.getItem("silence-mode");
}

export function setMode(mode) {
  localStorage.setItem("silence-mode", mode);
  if (mode === "auto") $("html").attr("mode", getAutoMode());
  else $("html").attr("mode", mode);
}

export function setToggle(switcher) {
  localStorage.setItem(`toggle-switcher`, switcher);
}

export function getToggle() {
  return localStorage.getItem(`toggle-switcher`);
}
