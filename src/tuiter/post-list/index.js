import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis, faT } from '@fortawesome/free-solid-svg-icons';
import postArray from  "./posts.json";
import PostItem from "./post-list-item";

const PostLists = () => {
    return (
        <>
            <div className="list-group">
                {
                    postArray.map(post =>
                        <PostItem key={post._id} post={post}/>
                    )
                }
            </div>
        </>

    );
};
export default PostLists;