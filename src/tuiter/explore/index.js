import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import NavTab from "../nav-tab";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <form className="form-inline m-0 row d-flex align-items-center">
                    <div className="form-group col-11 p-0">
                        <div className="ps-0 pe-0 position-relative">
                            <input type="text"
                                   className="form-control rounded-pill ps-5"
                                   placeholder="Search Tuiter"/>
                                <div className="position-absolute bottom-0 ms-3 wd-nudge-up">
                                    <i className="bi bi-search"></i>
                                </div>
                        </div>
                    </div>
                    <div className="col-1 form-group d-flex justify-content-end pe-0 align-items-center">
                        <a className="d-flex align-items-center wd-no-underline"
                           href="explore-settings.html"><i className="bi bi-gear-fill fs-2"></i></a>
                    </div>
                </form>
            </div>
            <NavTab/>
            <div className="position-relative mb-2">
                <img src="/images/spacex.jpeg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
                <div className="position-absolute bottom-0 left-0 p-1">
                    <p className="mb-0 fw-bold h1 text-white">SpaceX's Starship</p>
                </div>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;