import posts from "./posts.js"
import PostItem from "./PostItem.js";

const PostList = () => {
    return (
        `
       
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col bg-primary">
                            <img class="rounded-pill" width="50px" src="../images/northeastern.jpeg"/>
                        </div>
                        <div class="col-11 ps-0 pe-0" style="width:88%">
                                    <div class="row wd-width-100 m-0">
                                        <span class="text-white mb-1 col p-0 d-flex align-items-center">
                                            <h6 class="m-0 fw-bold">Elon Mask</h6>
                                        </span>
                                        <span class="col p-0 pe-3 d-flex justify-content-end align-items-center">
                                            <a class="d-flex justify-content-end align-items-center wd-no-decoration" href="#">
                                                <img width="10px" height="10px" src="../images/ellipsis.png"/>
                                            </a>
                                        </span>
                                    </div>

                                    <p class="text-white">Amazing show about @Inspiration4x mission!</p>
                            <div class="card border border-light">
                                <img src="../../images/starship.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card
                                        title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </li>
            </ul>
            
    
        `
    );

}

export default PostList