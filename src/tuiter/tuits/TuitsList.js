import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const TuitsLists = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <>
            <div className="list-group">
                {
                    tuitsArray.map(post =>
                        <TuitItem key={post._id} post={post}/>
                    )
                }
            </div>
        </>

    );
};
export default TuitsLists;