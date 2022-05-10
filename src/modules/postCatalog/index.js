import './index.less';
import options from "../../consts/options";

const florFlow = {
    "background-color": "var(--card-bg-color)",
    "border-radius": "10px",
    "padding": "20px 20px 0 20px",
}

function buildCss(dom) {
    $(dom).css(florFlow);
}

function catalogController() {
    // 当前滑动的窗口距离顶部距离比上次的少就是往上滑动，反之往下滑动
    let lastWinScroTop = 0;

    $(window).scroll(() => {
        // 侧边栏除目录以外的 DOM
        let sidebarItem0 = $("#leftcontentcontainer")[0];
        // 目录 DOM
        let sidebarItem1 = $("#esa-catalog-wrapper")[0];
        // sidebarItem0 元素的高度，元素距离顶部 + 元素本身的高度
        let item0Height = sidebarItem0.offsetHeight + sidebarItem0.offsetTop;
        // 当前窗口距离顶部的距离
        let nowWinScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (nowWinScrollTop > lastWinScroTop) {
            if (sidebarItem1.offsetTop - nowWinScrollTop < 0) {
                $(sidebarItem1).removeClass("esa-catalog-initial").addClass("esa-catalog-fixed");
            }
        } else {
            if (nowWinScrollTop < item0Height) {
                $(sidebarItem1).removeClass("esa-catalog-fixed").addClass("esa-catalog-initial");
            }
        }
        lastWinScroTop = nowWinScrollTop;
    });
}

function buildSideBar() {
    let elements = $("#sideBarMain").children();
    $(elements).each((index, element) => {
        if (index < elements.length - 2) {
            $(element).remove();
        }
    })
}

function buildPostCatalog() {
    $("#mainContent .forFlow").css(florFlow);
    buildSideBar();
    catalogController();

    const catalogConfig = options.catalog;

    if (catalogConfig.enable) {
        const levels = catalogConfig.levels;
        const level1 = levels[0];
        const level2 = levels[1];
        const level3 = levels[2];
        let captions = $("#cnblogs_post_body").find(levels.join(","));

        // $("body").append(`<div class="esa-catalog noactive"></div>`);

        // if (catalog.active) {
        //     $toolbar.find(".catalog").trigger("click");
        // }
        //
        // if (window.screen.width < 990) {
        //     $toolbar.find(".catalog").trigger("click");
        // }

        let h1c = 0;
        let h2c = 0;
        let h3c = 0;

        let catalogContents = `
            <div id="esa-catalog-wrapper">
                <div id='esa-catalog-inner'>
                    <h3 class='catListTitle'>目录</h3>
                    <ul id='esa-catalog'>
        `;

        $.each(captions, (index, element) => {
            const tagName = element.tagName.toLowerCase();
            const text = $(element).text();
            let id = $(element).attr("id");
            let titleIndex = "";
            let titleContent = text;

            if (!catalogConfig.index) {
                switch (tagName) {
                    case level1:
                        titleContent = `<span class="level1">${titleContent}</span>`;
                        break;
                    case level2:
                        titleContent = `<span class="level2">${titleContent}</span>`;
                        break;
                    case level3:
                        titleContent = `<span class="level3">${titleContent}</span>`;
                        break;
                }
            } else {
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
            }

            if (!id) {
                id = $(element).text().replace(/\ /g, "-").toLowerCase();
                $(element).attr("id", id);
            }

            catalogContents += `
                <li class="${tagName}" title="${text}">
                  <a class="esa-anchor-link" href="#${id}">
                    ${titleIndex + titleContent}
                  </a>
                </li>
            `;

            $(element).append(`<a href="#${id}" class="esa-anchor">#</a>`).hover(
                () => {
                    $(element).find(".esa-anchor").css("opacity", 1);
                },
                () => {
                    $(element).find(".esa-anchor").css("opacity", 0);
                }
            );
        });

        catalogContents += `</ul></div></div>`;

        $("#sideBarMain").append(catalogContents);
    }
}

export default buildPostCatalog;
