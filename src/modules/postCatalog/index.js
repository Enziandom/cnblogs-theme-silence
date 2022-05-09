import "./index.less";
import options from "../../consts/options";

function buildPostCatalog() {
    const catalog = options.catalog;

    if (catalog.enable) {
        const levels = catalog.levels;
        const level1 = levels[0];
        const level2 = levels[1];
        const level3 = levels[2];
        let $headers = $("#cnblogs_post_body").find(levels.join(","));
        let $toolbar = $(".esa-toolbar");

        if (!$headers.length) {
            $toolbar.find(".catalog").remove();
        }

        $("body").append(`<div class="esa-catalog noactive"></div>`);

        if (catalog.active) {
            $toolbar.find(".catalog").trigger("click");
        }

        if (window.screen.width < 990) {
            $toolbar.find(".catalog").trigger("click");
        }

        let h1c = 0;
        let h2c = 0;
        let h3c = 0;

        let catalogContents = "<ul>";

        $.each($headers, (_, header) => {
            const tagName = header.tagName.toLowerCase();
            const text = $(header).text();
            let id = $(header).attr("id");
            let titleIndex = "";
            let titleContent = text;

            if (!catalog.index) {
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
                id = $(header).text().replace(/\ /g, "-").toLowerCase();
                $(header).attr("id", id);
            }

            catalogContents += `
        <li class="${tagName}" title="${text}">
          <a class="esa-anchor-link" href="#${id}">
            ${titleIndex + titleContent}
          </a>
        </li>
      `;

            $(header)
                .append(`<a href="#${id}" class="esa-anchor">#</a>`)
                .hover(
                    () => {
                        $(header).find(".esa-anchor").css("opacity", 1);
                    },
                    () => {
                        $(header).find(".esa-anchor").css("opacity", 0);
                    }
                );
        });

        catalogContents += `</ul>`;

        $("#sideBarMain").prepend(catalogContents);
    }
}

export default buildPostCatalog;
