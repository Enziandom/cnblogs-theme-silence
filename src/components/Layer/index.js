import "./index.scss";

export function message(content) {
  $("body").prepend(`<div class="esa-layer"><span class="content">${content}</span></div>`);
  let $layer = $(".esa-Layer");
  $layer.slideDown(200);
  setTimeout(() => {
    $layer.remove();
  }, 2000);
}
