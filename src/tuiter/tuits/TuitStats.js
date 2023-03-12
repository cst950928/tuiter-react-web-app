import {FaRegComment} from "react-icons/fa";
import {BsFillHeartFill, BsHeart, BsShare} from "react-icons/bs";
import {TfiReload} from "react-icons/tfi"
import {useDispatch} from "react-redux";
import {updateStats} from "./tuits-reducer";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const handleLikeClick = () => {
        if (post.liked === true) {
            dispatch(updateStats({_id: post._id, data: {liked: false, likes: post.likes - 1}}))
        } else {
            dispatch(updateStats({_id: post._id, data: {liked: true, likes: post.likes + 1}}))
        }
    }
    return (
        <div className="m-3 ms-0">
            <div className="row">
                <div className="col d-flex align-items-center wd-no-underline pe-0">
                    <FaRegComment className={"text-dark"}/>
                    <span className="text-dark ms-3">{post.replies}</span>
                </div>
                <div className="col d-flex align-items-center wd-no-underline pe-0">
                    <TfiReload className={"text-dark"}/>
                    <span className="text-dark ms-3">{post.retuits}</span>
                </div>
                <div className="col d-flex align-items-center wd-no-underline pe-0"  onClick={handleLikeClick}>
                    {post.liked === true ? <BsFillHeartFill className={`text-danger`}/> : <BsHeart className={`text-dark`}/>}
                    <span className="text-dark ms-3">{post.likes}</span>
                </div>
                <div className="col d-flex align-items-center wd-no-underline pe-0">
                    <BsShare className={"text-dark"}/>
                </div>
            </div>

        </div>
    )
};
export default TuitStats;
