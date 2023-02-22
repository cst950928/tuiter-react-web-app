import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEllipsis, faComment, faRetweet, faHeart, faUpload} from '@fortawesome/free-solid-svg-icons';
const PostItem = ({post}) => {
    return (
        <li className="list-group-item bg-transparent pt-3 pb-0 border-light">
            {post.retweet !== undefined &&
                <div className="row wd-retweet-fontsize">
                    <div className={"col d-flex align-items-center justify-content-end pe-4"}>
                        <FontAwesomeIcon icon={faRetweet} className={"text-muted"}/>
                    </div>
                    <div className={"col-10 p-0 text-muted fw-bold "}>
                        {post.retweet} Retweeted
                    </div>
                </div>
            }
            <div className="row">
                <div className={"col p-0 d-flex justify-content-center"}>
                    <img className={"rounded-pill"}
                         width="50px"
                         height="50px"
                         src={post.avatar} />
                </div>
                <div className={"col-10 ps-0 pe-0 wd-override-width"}>
                    <div className={"row wd-width-100 m-0"}>
                        <span className={"col-10 p-0 d-flex align-items-center"}>
                            <h6 className={"m-0 fw-bold"}>{post.userName}</h6>
                            <FontAwesomeIcon icon={faCheckCircle} className={"ms-2 text-primary"}/>
                            <span className={"ms-2 text-muted"}>{post.handle} · {post.time}</span>
                        </span>
                        <span className={"col p-0 d-flex justify-content-end align-items-center"}>
                            <a className={"d-flex justify-content-end align-items-center wd-no-decoration"}
                               href="#">
                                <FontAwesomeIcon icon={faEllipsis} className={"ms-2 text-muted me-3"}/>
                            </a>
                        </span>
                    </div>

                    <p className="pe-2">{post.text}{post.link != undefined ? ' ->' : '.'} <a href="#" className={"wd-no-underline"}>{post.link != undefined? post.link : ''}</a></p>

                    <div className={`wd-mid-right-margin bg-transparent wd-round wd-gray-border`}>
                        {!post.subTweet ? <img src={post.image}
                                               className={`wd-round wd-width-100`}
                                               alt="..."/> :
                            (
                                <div className={"row wd-width-100 m-0 p-3"}>
                                    <div className={"m-0 p-0 col mb-1"}>
                                        <img className={"rounded-pill"}
                                             width="25px"
                                             height="25px"
                                             src={post.subTweetAvatar} />
                                        <span className={"m-0 fw-bold ms-1"}>{post.subTweetUserName}</span>
                                        <FontAwesomeIcon icon={faCheckCircle} className={"text-primary ms-1"}/>
                                        <span className={"text-muted ms-1"}>{post.subTweetHandle} · {post.subTweetTime}</span>
                                    </div>
                                    <p className="m-0 p-0">{post.subTweetContent}{post.subTweetLink != undefined ? ' ->' : '.'} <a href="#" className={"wd-no-underline"}>{post.subTweetLink != undefined? post.subTweetLink : ''}</a></p>
                                </div>
                            )

                        }
                    </div>

                    <div className="m-3 ms-0">
                        <div className="row">
                            <a className="col d-flex align-items-center wd-no-underline pe-0"
                               href="#">
                                <FontAwesomeIcon icon={faComment} className={"text-muted"}/>
                                <span className="text-muted ms-3">{post.comment}</span>
                            </a>
                            <a className="col d-flex align-items-center wd-no-underline pe-0"
                               href="#">
                                <FontAwesomeIcon icon={faRetweet} className={"text-muted"}/>
                                <span className="text-muted ms-3">{post.repost}</span>
                            </a>
                            <a className="col d-flex align-items-center wd-no-underline pe-0"
                               href="#">
                                <FontAwesomeIcon icon={faHeart} className={"text-muted"}/>
                                <span className="text-muted ms-3">{post.like}</span>
                            </a>
                            <a className="col d-flex align-items-center wd-no-underline pe-0"
                               href="#">
                                <FontAwesomeIcon icon={faUpload} className={"text-muted"}/>
                            </a>
                        </div>

                    </div>
                    {post.showThread &&
                        <div className={"mb-3"}>
                            <a href="#" className={"wd-no-underline"}>Show this thread</a>
                        </div>
                    }
                </div>
            </div>
        </li>
    );
};

export default PostItem;