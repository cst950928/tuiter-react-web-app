import React from "react";
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