import React from "react";
import {FaArrowLeft} from "react-icons/fa"
import './index.css'
import {useSelector} from "react-redux";

const ProfileHeader = () => {
    const profile = useSelector(state => state.profile)
    return (
        <div className={`row w-100 m-0`}>
            <div className={`col-1 col-xs-2 d-flex align-items-center p-0 ms-2`}>
                <FaArrowLeft className={`fw-bold ms-3`}/>
            </div>
            <div className={`col ms-4 p-0`}>
                <h5 className={`fw-bold mb-0 mt-1`}>{profile.firstName} {profile.lastName}</h5>
                <p className={`text-muted mt-0 mb-1 light-bold`}>6,114 Tweets</p>
            </div>
        </div>
    )
}

export default ProfileHeader;