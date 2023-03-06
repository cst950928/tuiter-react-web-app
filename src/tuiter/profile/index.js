import React from "react";
import ProfileHeader from "./profile-header"
import ProfileBody from "./profile-body"
import ProfileFooter from "./profile-footer"
import {configureStore} from "@reduxjs/toolkit";
import profile from "../reducers/profile-reducer"
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {profile}
});
const ProfileComponent = () => {
    return (
        <Provider store={store}>
            <div className={`border border-muted`}>
                <ProfileHeader/>
                <ProfileBody/>
                <ProfileFooter/>
            </div>
        </Provider>

    )
}

export default ProfileComponent;