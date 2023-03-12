import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import HomeComponent2 from "./home2";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer"
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
const store = configureStore({
    reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}
})

function Tuiter() {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        {/*<Route path="home" element={<HomeComponent/>}/>*/}
                        <Route index element={<HomeComponent2/>}/>
                        <Route path="home" element={<HomeComponent2/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}></Route>
                        <Route path="edit-profile" element={<EditProfile/>}></Route>
                    </Routes>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>

    );
}
export default Tuiter