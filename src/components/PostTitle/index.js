import "./index.less";

function createPostTitle() {
  let $postDesc = $(".postDesc").clone();
  let $spans = $postDesc.find("span").clone();
  let $as = $postDesc.find("a").clone();

  let bluepoint = $(`
    <div class="enzia-post-desc">
        <div class="user item"><span><i class="fa fa-user-o" aria-hidden="true"></i></span><a href="${$as[0].href}">${$as[0].innerText}</a></div>
        <div class="post-date item"><span><i class="fa fa-clock-o" aria-hidden="true"></i></span>${$spans[0].innerText}</div>
        <div class="read-num item"><span><i class="fa fa-eye" aria-hidden="true"></i></span>${$spans[1].innerText}次阅读</div>
        <div class="comm-num item"><span><i class="fa fa-comments-o" aria-hidden="true"></i></span>${$spans[2].innerText}条评论</div>
        <div class="edit-btn item"><span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span><a href="${$as[2].href}">${$as[2].innerText}</a></div>
    </div>
  `);

  $(".postTitle").after(bluepoint);
}

export default createPostTitle;
