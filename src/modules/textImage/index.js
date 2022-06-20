import "./index.less";

function buildTextImage() {
  $("#cnblogs_post_body a").each(function (index, el) {
    if ( $(el).find("img").length ) {
      let imgDesc = $(el).children("img").attr("desc");
      if ( imgDesc ) {
        $(el).append(`<p class="text-img-desc">${ imgDesc }</p>`);
      }
    }
  });
}

export default buildTextImage;