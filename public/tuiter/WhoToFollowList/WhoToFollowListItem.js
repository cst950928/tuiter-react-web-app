const WhoToFollowListItem = (who) => {
    return (
        `<li class="list-group-item">
            <div class="row">
                <div class="col-2 d-flex align-items-center p-0 ps-2">
                    <img src="${who.avatarIcon}"
                         class="rounded-circle" width="45px" height="45px"/>
                </div>
                <div class="col-7 d-flex align-items-center p-0 ps-2">
                    <div>
                        <span><h6 class="d-inline">${who.userName}</h6></span>
                        <span class="ps-1">
                            <i class="fa fa-check-circle"></i>
                        </span>
                        <p class="d-block mb-0">${who.handle}</p>
                    </div>
                </div>
        
                <div class="col-3 d-flex align-items-center p-0 pe-2 justify-content-end">
                    <button class="btn btn-primary rounded-pill"
                            href="#">
                        Follow
                    </button>
                </div>
            </div>
        </li>`
    )
}


export default WhoToFollowListItem