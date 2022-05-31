import "./index.less";
import options from "../../../consts/options";

export function buildNiceBooks() {
  let template = ``;

  if ( !options.niceBooks ) return template;

  let books = options.niceBooks;
  template = `<ul class="books-wrap">`;
  for ( let i = 0; i < books.length; i++ ) {
    template += `
      <li class="books item-${ i }">
        <div class="wrap">
          <img alt="book-cover" class="cover" src="${ books[i].cover }" />
          <div class="info">
            <div class="title">${ books[i].title }</div>
            <div class="author">${ books[i].author }</div>
          </div>
        </div>
      </li>
    `;
  }

  return `
    <div id="nice-books">
      <h3 class="catListTitle">
        <div class="cat-list-title-wrap">
          <div class="title">推荐书籍</div>
        </div>
      </h3>
      ${ template }
    </div>
  `;
}