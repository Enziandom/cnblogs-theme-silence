import "./index.scss";

function createTextImage() {
  $("#cnblogs_post_body img").each(function (index, el) {
    let imgDesc = $(el).attr("desc");
    let $imgBox = $(`<div class="enzia-img"></div>`);
    $(el).after($imgBox);
    $($imgBox).append(el);
    if (imgDesc) {
      $($imgBox).append(`<p class="enzia-img-desc">${imgDesc}</p>`);
    }
  });
}

export default createTextImage;
