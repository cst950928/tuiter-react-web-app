import NavBarItem from "./NavBarItem.js";
import navbars from "./navbars.js";


// <ul className="list-group col-xl-12 col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
//     <li className="list-group-item d-flex align-items-center">
//         <a className="d-flex align-items-center"
//            href="#">
//             <span><i className="col-xl-2 fab fa-t fa-lg col-lg-12 col-md-12"></i></span>
//             <span className="col-xl-10 align-self-center mx-2 d-none d-xl-block"></span>
//         </a>
//     </li>
//     <li className="list-group-item d-flex align-items-center">
//         <a className="d-flex align-items-center"
//            href="#">
//             <span><i className="col-xl-2 fa fa-home fa-x col-lg-12 col-md-12"></i></span>
//             <span className="col-xl-10 align-self-center mx-2 d-none d-xl-block">Home</span>
//         </a>
//     </li>
//     </ul>
const NavBarList = () => {
    return (
        `
            ${navbars.map(navbar => {
                return NavBarItem(navbar);
            }).join('')       
            }
        `
    );
}

export default NavBarList;