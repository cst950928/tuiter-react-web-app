import NavBarItem from "./NavBarItem.js";
import navbars from "./navbars.js";

const NavBarList = (active) => {
    return (
        `
            ${navbars.map(navbar => {
                return NavBarItem(navbar, active);
            }).join('')       
            }
        `
    );
}

export default NavBarList;