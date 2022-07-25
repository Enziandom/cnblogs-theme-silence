import "./index.less";
import options from "../../../../consts/options";

function buildMyLinks() {
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

  return template;
}

export default buildMyLinks;