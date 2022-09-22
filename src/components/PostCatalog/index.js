import "./index.scss";
import options from "../../config/options";
import { isMobile } from "../../utils/device-helper";

function createPostCatalog() {
  const catalogConfig = options.catalog;

  let catalogToolItem = $(`<span class="catalog tool-item" title="文章目录"><i class="fa fa-map-marker" aria-hidden="true"></i></span>`);

  $("#enzia-tools .canbe-fade").prepend(catalogToolItem);

  if (catalogConfig.enable) {
    const levels = catalogConfig.levels;
    const level1 = levels[0];
    const level2 = levels[1];
    const level3 = levels[2];
    let captions = $("#cnblogs_post_body").find(levels.join(","));

    if (captions.length <= 0) return;

    let h1c = 0;
    let h2c = 0;
    let h3c = 0;

    let catalogContents = `
      <div id="esa-catalog-wrapper">
        <div id='esa-catalog-inner'>
          <h2 class="catalog-title"><i class="fa fa-thumb-tack" aria-hidden="true"></i>文章目录</h3>
          <ul id='esa-catalog'>
    `;

    $.each(captions, (index, element) => {
      const tagName = element.tagName.toLowerCase();
      const text = $(element).text();
      let titleContent = text;
      let href = $(element).attr("id");
      let titleIndex = "";

      if (catalogConfig.index) {
        /* 显示索引值 */
        if (tagName === level1) {
          h1c++;
          h2c = 0;
          h3c = 0;
          titleIndex = `<span class="level1">${h1c}. </span>`;
        } else if (tagName === level2) {
          h2c++;
          h3c = 0;
          titleIndex = `<span class="level2">${h1c}.${h2c}. </span>`;
        } else if (tagName === level3) {
          h3c++;
          titleIndex = `<span class="level3">${h1c}.${h2c}.${h3c}. </span>`;
        }
      } else {
        /* 不显示索引值 */
        switch (tagName) {
          case level1:
            titleContent = `<span class="level1">${text}</span>`;
            break;
          case level2:
            titleContent = `<span class="level2">${text}</span>`;
            break;
          case level3:
            titleContent = `<span class="level3">${text}</span>`;
            break;
        }
      }

      catalogContents += `
        <li class="${tagName} catalog-li" title="${text}">
          <a class="esa-anchor-link" href="#${href}">
            ${titleIndex + titleContent}
          </a>
        </li>
      `;
    });

    catalogContents += `</ul></div></div>`;

    $("#home").append(catalogContents);

    let $catalogs = $(".catalog-li");
    let lastCatalog = null;

    $(catalogToolItem).on("click", () => {
      $("#esa-catalog-wrapper").fadeToggle();
    });

    if (catalogConfig.pmdAutoOpen) {
      if (isMobile()) {
        $(catalogToolItem).click();
      }
    }

    if (catalogConfig.pcAutoOpen) {
      if (!isMobile()) {
        $(catalogToolItem).click();
      }
    }

    $("#mainContent").on("scroll", function () {
      for (let i = 0; i < captions.length; i++) {
        let $level = $(captions[i]);
        let top = $level.offset().top;
        if (window.scrollY >= top - 80 && window.scrollY <= top) {
          if (lastCatalog) {
            $(lastCatalog).removeClass("current-li");
          }
          $($catalogs[i]).addClass("current-li");
          lastCatalog = $catalogs[i];
        }
      }
    });
  }
}

export default createPostCatalog;
