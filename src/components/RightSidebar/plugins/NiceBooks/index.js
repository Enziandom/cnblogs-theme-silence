import "./index.less";

function createNiceBooks(data) {
  let blueprint = ``;
  if ( !data ) return blueprint;
  blueprint = `<ul class="books-wrap">`;
  for ( let i = 0; i < data.length; i++ ) {
    blueprint += `
      <li class="books item-${ i }">
        <div class="wrap">
          <img alt="book-cover" class="cover" src="${ data[i].cover }" />
          <div class="info">
            <div class="title">${ data[i].title }</div>
            <div class="author">${ data[i].author }</div>
          </div>
        </div>
      </li>
    `;
  }
  return `
    <div id="nice-books">
      ${ blueprint }
    </div>
  `;
}

export default createNiceBooks;