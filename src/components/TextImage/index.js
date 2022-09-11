import "./index.scss";

function createTextImage() {
  $("#cnblogs_post_body img").each(function (index, el) {
    let imgDesc = $(el).attr("desc");
    let $imgWrapper = $(`<div class="enzia-img"></div>`);
    $(el).after($imgWrapper);
    $($imgWrapper).append($imgWrapper);
    if (imgDesc) {
      $($imgWrapper).append(`<p class="enzia-img-desc">${imgDesc}</p>`);
    }
  });
}

export default createTextImage;
