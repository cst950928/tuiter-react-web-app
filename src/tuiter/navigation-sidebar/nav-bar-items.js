import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis} from '@fortawesome/free-solid-svg-icons';

library.add( faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis);
const NavBarItems = (content) => {
    const navBars = content.nav;
    const active = content.active;
    return (
            <a className={`list-group-item d-flex align-items-center justify-content-center
                    ${active === navBars.text ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={navBars.icon} className={`col-xl-2 col-lg-12 col-md-12`}/>
                    <span className="col-xl-10 align-self-center mx-2 d-none d-xl-block">{navBars.text}</span>
            </a>
    );
};

export default NavBarItems;