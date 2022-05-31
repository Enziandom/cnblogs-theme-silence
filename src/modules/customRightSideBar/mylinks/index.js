import "./index.less";
import options from "../../../consts/options";

export function buildMyLinks() {
  let template = ``;
  if ( !options.myLinks ) return template;

  let links = options.myLinks;
  template = `<ul class="links-wrap">`;
  for ( let i = 0; i < links.length; i++ ) {
    template += `
        <li class="links item-${ i }">
          <a href="${ links[i].href }" target="_blank">
            ${ links[i].title }
          </a>
        </li>
      `;
  }
  template += `</ul>`;

  return `
    <div id="my-links">
      <h3 class="catListTitle">
        <div class="cat-list-title-wrap">
          <div class="title">常用链接</div>
        </div>
      </h3>
      ${ template }
    </div>
  `;
}