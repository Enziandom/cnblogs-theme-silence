import "./index.less";

function buildTextImage() {
  $("#cnblogs_post_body a").each(function () {
    if ( $(this).find("img").length ) {
      let imgDesc = $(this).children("img").attr("desc");
      if ( imgDesc ) {
        $(this).append(`<p class="text-img-desc">${ imgDesc }</p>`);
      }
    }
  });
}

export default buildTextImage;