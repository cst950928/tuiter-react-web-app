import React from "react";
import './index.css'
import {FaBirthdayCake} from "react-icons/fa";
import {GrLocation} from "react-icons/gr";
import {BsCalendar3} from "react-icons/bs";
import {useSelector} from "react-redux";

const ProfileFooter = () => {
    const profile = useSelector((state) => state.profile)
    const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className="m-3 mt-2">
            <div>
                <div className="d-flex align-items-center pe-0 d-inline-flex me-3">
                    <GrLocation className={"footer-img"}/>
                    <span className="light-bold ms-0 text-muted">{profile.location}</span>
                </div>
                <div className="d-flex align-items-center pe-0 d-inline-flex me-3">
                    <FaBirthdayCake className={"footer-img"}/>
                    <span className="light-bold ms-0 text-muted">{profile.dateOfBirth}</span>
                </div>
                <div className="d-flex align-items-center pe-0 d-inline-flex">
                    <BsCalendar3 className={`footer-img`}/>
                    <span className="light-bold ms-0 text-muted">Joined {months[profile.dateJoined.split('/')[0] - 1]} {profile.dateJoined.split('/')[1]}</span>
                </div>
            </div>
            <div className={`m-2`}>
                <span className={`p-0 me-4`}>
                    <span className={`me-2 fw-bold`}>{profile.followingCount}</span>
                    <span className={`light-bold text-muted`}>Following</span>
                </span>
                <span>
                    <span className={`me-2 fw-bold`}>{profile.followersCount}</span>
                    <span className={`light-bold text-muted`}>Followers</span>
                </span>
            </div>

        </div>
    )
}

export default ProfileFooter;