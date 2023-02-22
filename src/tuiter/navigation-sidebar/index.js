import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faT} from '@fortawesome/free-solid-svg-icons';
import NavBarItem from "./nav-bar-items.js";
import navBarsArray from "./navbars.json";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2] === '' || paths[2] === undefined ? 'explore' : paths[2];
    console.log(active);
    return (
        <>
            <div className="list-group">
                <a className="list-group-item d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faT} className={`col-xl-2 col-lg-12 col-md-12`}/>
                    <span className="col-xl-10 align-self-center mx-2 d-none d-xl-block"></span>
                </a>
                {
                    navBarsArray.map(nav =>
                        <NavBarItem key={nav._id} nav={nav} active={active}/>
                    )
                }
                <Link to="/" className="list-group-item">
                    Labs
                </Link>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </>

    );
};
export default NavigationSidebar;