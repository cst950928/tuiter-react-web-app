import {BsPatchCheckFill} from 'react-icons/bs';
import TuitStats from './TuitStats'
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item bg-transparent pt-3 pb-0 border border-muted">
            <div className="row">
                <div className={"col p-0 d-flex justify-content-center"}>
                    <img className={"rounded-pill"}
                         width="50px"
                         height="50px"
                         src={`/images/` + post.image} />
                </div>
                <div className={"col-10 ps-0 pe-0 wd-override-width"}>
                    <div className={"row wd-width-100 m-0"}>

                        <span className={"col-10 p-0 d-flex align-items-center"}>
                            <h6 className={"m-0 fw-bold"}>{post.username}</h6>
                            <BsPatchCheckFill className={"ms-2 text-primary"}/>
                            <span className={"ms-2"}>{post.handle} · {post.time}</span>
                        </span>
                        <span className={"col p-0 d-flex justify-content-end align-items-center pe-2"}>
                            <i className="bi bi-x-lg"
                               onClick={() => deleteTuitHandler(post._id)}></i>
                        </span>
                    </div>

                    <p className="pe-2">{post.tuit}</p>
                    <TuitStats post={post}/>
                </div>
            </div>

        </li>
    );
};

export default TuitItem;