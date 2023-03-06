import {FaRegComment} from "react-icons/fa";
import {BsFillHeartFill, BsHeart, BsShare} from "react-icons/bs";
import {TfiReload} from "react-icons/tfi"

const TuitStats = ({post}) => {
    return (
        <div className="m-3 ms-0">
            <div className="row">
                <a className="col d-flex align-items-center wd-no-underline pe-0"
                   href="#">
                    <FaRegComment className={"text-dark"}/>
                    <span className="text-dark ms-3">{post.replies}</span>
                </a>
                <a className="col d-flex align-items-center wd-no-underline pe-0"
                   href="#">
                    <TfiReload className={"text-dark"}/>
                    <span className="text-dark ms-3">{post.retuits}</span>
                </a>
                <a className="col d-flex align-items-center wd-no-underline pe-0"
                   href="#">
                    {post.liked === true ? <BsFillHeartFill className={`text-danger`}/> : <BsHeart className={`text-dark`}/>}
                    <span className="text-dark ms-3">{post.likes}</span>
                </a>
                <a className="col d-flex align-items-center wd-no-underline pe-0"
                   href="#">
                    <BsShare className={"text-dark"}/>
                </a>
            </div>

        </div>
    )
};
export default TuitStats;
