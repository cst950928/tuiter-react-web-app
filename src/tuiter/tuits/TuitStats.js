import {FaRegComment} from "react-icons/fa";
import {BsFillHeartFill, BsHeart, BsShare} from "react-icons/bs";
import {AiOutlineDislike, AiFillDislike} from "react-icons/ai";
import {TfiReload} from "react-icons/tfi"
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const handleLikeClick = () => {
        if (post.liked === true) {
            dispatch(updateTuitThunk({...post, liked: false, likes: post.likes - 1}))
        } else {
            dispatch(updateTuitThunk({...post, liked: true, likes: post.likes + 1}))
        }
    }
    const handleDisLikeClick = () => {
        if (post.disliked === true) {
            dispatch(updateTuitThunk({...post, disliked: false, dislikes: post.dislikes - 1}))
        } else {
            dispatch(updateTuitThunk({...post, disliked: true, dislikes: post.dislikes + 1}))
        }
    }
    return (
        <div className="m-3 ms-0">
            <div className="row">
                <div className="col d-flex align-items-center wd-no-underline pe-0">
                    <FaRegComment className={"text-dark"}/>
                    <span className="text-dark ms-2">{post.replies}</span>
                </div>
                <div className="col d-flex align-items-center wd-no-underline pe-0">
                    <TfiReload className={"text-dark"}/>
                    <span className="text-dark ms-2">{post.retuits}</span>
                </div>
                <div className="col d-flex align-items-center wd-no-underline pe-0"  onClick={handleLikeClick}>
                    {post.liked === true ? <BsFillHeartFill className={`text-danger`}/> : <BsHeart className={`text-dark`}/>}
                    <span className="text-dark ms-2">{post.likes}</span>
                </div>
                <div className="col d-flex align-items-center wd-no-underline pe-0"  onClick={handleDisLikeClick}>
                    {post.disliked === true ? <AiFillDislike className={`text-danger`} size={18}/> : <AiOutlineDislike className={`text-dark`} size={18}/>}
                    <span className="text-dark ms-2">{post.dislikes}</span>
                </div>
                <div className="col d-flex align-items-center wd-no-underline pe-0">
                    <BsShare className={"text-dark"}/>
                </div>
            </div>

        </div>
    )
};
export default TuitStats;
