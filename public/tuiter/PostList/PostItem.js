const PostItem = (post) => {
    return (`
        <li class="list-group-item bg-transparent pt-3 pb-0">
                    <div class="row">
                        <div class="col p-0 d-flex justify-content-center">
                            <img class="rounded-pill" width="52px" height="52px" src="../images/${post.avatar}"/>
                        </div>
                        <div class="col-10 ps-0 pe-0 wd-override-width" >
                            <div class="row wd-width-100 m-0">
                                <span class="text-white mb-1 col-10 p-0 d-flex align-items-center">
                                    <h6 class="m-0 fw-bold">${post.userName}</h6>
                                    <i class="fa fa-check-circle ms-2"></i>
                                    <span class="ms-2 text-muted">${post.handle} · ${post.time}</span>
                                </span>
                                <span class="col p-0 wd-mid-right-margin d-flex justify-content-end align-items-center">
                                    <a class="d-flex justify-content-end align-items-center wd-no-decoration" href="#">
                                        <i class="fa fa-ellipsis-h text-muted"></i>
                                    </a>
                                </span>
                            </div>

                            <p class="text-white pe-2">${post.text}</p>
                            <div class="card wd-mid-right-margin bg-transparent wd-border-gray wd-round">
                                <img src="../images/${post.image}" class="card-img-top ${post.cardLink === '' ? `wd-round` : `wd-upper-round wd-border-gray wd-border-bottom-only`}" alt="...">
                                ${post.cardLink !== '' ?
                                   ` <div class="card-body pe-2">
                                        <h6 class="card-title mb-2">${post.cardTitle}</h6>
                                        <p class="card-text text-muted mb-0">
                                            ${post.cardText}</p>
                                        <a href="#"
                                           class="wd-no-decoration text-muted">
                                            <i class="fa fa-link"></i>
                                            <span>${post.cardLink}</span>
                                        </a>
                                    </div>` : ''
                                }
                                
                            </div>
                            <div class="m-3 ms-0">
                                <div class="row">
                                    <a class="col d-flex align-items-center wd-no-underline" href="#">
                                        <i class="fa-regular fa-comment text-muted"></i>
                                        <span class="text-muted ms-3">${post.comment}</span>
                                    </a>
                                    <a class="col  d-flex align-items-center wd-no-underline"  href="#">
                                        <i class="fa fa-retweet text-muted"></i>
                                        <span class="text-muted ms-3">${post.repost}</span>
                                    </a>
                                    <a class="col  d-flex align-items-center wd-no-underline"  href="#">
                                        <i class="fa-regular fa-heart text-muted"></i>
                                        <span class="text-muted ms-3">${post.like}</span>
                                    </a>
                                    <a class="col  d-flex align-items-center wd-no-underline"  href="#">
                                        <i class="fa fa-upload text-muted "></i>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                </li>
    `);
}

export default PostItem