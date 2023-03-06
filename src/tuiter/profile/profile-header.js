import React from "react";
import {FaArrowLeft} from "react-icons/fa"
import './index.css'
import {useSelector} from "react-redux";

const ProfileHeader = () => {
    const profile = useSelector(state => state.profile)
    return (
        <div>
            <div className={`row`}>
                <div className={`col-2 d-flex align-items-center justify-content-center`}>
                    <FaArrowLeft className={`fw-bold`}/>
                </div>
                <div className={`col`}>
                    <h5 className={`fw-bold mb-0 mt-1`}>{profile.firstName} {profile.lastName}</h5>
                    <p className={`text-muted mt-0 mb-1 light-bold`}>6,114 Tweets</p>
                </div>
            </div>


        </div>
    )
}

export default ProfileHeader;