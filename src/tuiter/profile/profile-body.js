import React from "react";
import './index.css'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileBody = () => {
    const profile = useSelector((state) => state.profile)
    return (
        <div>
            <div className={`position-relative`}>
                <img src="/images/banner.jpeg" className={`banner-img`}/>
                <img src="/images/react-blue.png" className={`profile-img rounded-circle position-absolute`}/>
            </div>
            <div className={`d-flex justify-content-end mt-3 me-3`}>
                <Link to="../edit-profile">
                    <button className={`btn border border-muted rounded-pill fw-bold`}>Edit profile</button>
                </Link>
            </div>
            <div className={`mt-5 ms-4 me-4`}>
                <h5 className={`fw-bold mb-1`}>{profile.firstName} {profile.lastName}</h5>
                <p className={`text-muted light-bold`}>{profile.handle}</p>
                <p className={`light-bold m-0`}>Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retweets and likes are not endorsements.</p>
            </div>
        </div>

    )
}

export default ProfileBody;