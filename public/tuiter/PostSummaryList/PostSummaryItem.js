const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item pt-0 pb-0">
            <div class="row">
<!--                 <div class="card-body col-8 col-xxl-9 col-xl-9 col-lg-9 col-md-8 wd-override-padding pe-0"> -->
                <div class="card-body col-6 col-xxl-8 col-xl-8 col-lg-7 col-md-7 wd-override-padding pe-0">
                    <p class="card-title text-muted mb-0">${post.topic}</p>
                    <div>
                        <span><h6 class="fw-bold m-0 d-inline">${post.userName}</h6></span>
                        <span class="ps-1"><i class="fa fa-check-circle"></i></span>
                        <span class="ps-1 text-muted">- ${post.time}</span>
                    </div>
                    <p class="card-text fw-bold">
                        ${post.title}
                    </p>
                </div>
<!--                 <div class="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-4  d-flex justify-content-end align-items-center wd-override-padding ps-0"> -->
                <div class="col d-flex justify-content-end align-items-center wd-override-padding ps-0">
                    <img class="p-0 wd-width-90 wd-rounded" src="../images/${post.image}"/>
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem