import "./index.less";
import options from "../../../consts/options";

export function buildMyLinks() {

  function createLink() {
    let links = options.myLinks;

    let template = `<ul class="my-links-items">`;
    for ( let i = 0; i < links.length; i++ ) {
      template += `
        <li class="links-item item-${ i }">
          <a href="${ links[i].href }" target="_blank">
            ${ links[i].title }
          </a>
        </li>
      `;
    }
    template += `</ul>`;
    return template;
  }

  return `
    <div class="my-links">
      <h3 class="catListTitle">
        <div class="cat-list-title-wrap">
          <div class="title">常用链接</div>
        </div>
      </h3>
      ${ createLink() }
    </div>
  `;
}