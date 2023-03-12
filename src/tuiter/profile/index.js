import React from "react";
import ProfileHeader from "./profile-header"
import ProfileBody from "./profile-body"
import ProfileFooter from "./profile-footer"

const ProfileComponent = () => {
    return (
        <div className={`border border-muted`}>
            <ProfileHeader/>
            <ProfileBody/>
            <ProfileFooter/>
        </div>
    )
}

export default ProfileComponent;