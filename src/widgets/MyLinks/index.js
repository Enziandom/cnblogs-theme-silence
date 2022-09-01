import "./index.scss";

function createMyLinks(data) {
  let blueprint = ``;
  if (!data) return blueprint;
  blueprint = `<ul class="links-wrap">`;
  for (let i = 0; i < data.length; i++) {
    blueprint += `
        <li class="links item-${i}">
          <a href="${data[i].href}" target="_blank">
            ${data[i].title}
          </a>
        </li>
      `;
  }
  blueprint += `</ul>`;
  return `
    <div id="my-links">${blueprint}</div>
  `;
}

export default createMyLinks;
