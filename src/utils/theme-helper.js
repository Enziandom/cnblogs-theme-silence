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
  return sessionStorage.getItem(`silence-theme-${currentBlogApp}`) || options.defaultTheme;
}

export function getMode() {
  const hour = new Date().getHours();
  return sessionStorage.getItem(`silence-mode-${currentBlogApp}`) || (options.defaultMode === "auto" ? (hour >= 6 && hour < 18 ? "light" : "dark") : options.defaultMode);
}

export function setMode() {
  const $html = $("html");
  const mode = $($html).attr("mode") === "light" ? "dark" : "light";
  sessionStorage.setItem(`silence-mode-${currentBlogApp}`, mode);
  $($html).attr("mode", mode);
}

export function setTheme(theme) {
  sessionStorage.setItem(`silence-theme-${currentBlogApp}`, theme);
  $("html").attr("theme", theme);
}
