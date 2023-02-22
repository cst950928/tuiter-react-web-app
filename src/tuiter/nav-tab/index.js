import React from "react";
import TabItem from "./nav-tab-item.js";
import navTabsArray from "./navtabs.json";

const NavTab = () => {
    return (
        <ul className="nav nav-pills mb-2 mt-2">
            {
                navTabsArray.map(tab =>
                    <TabItem key={tab._id} tab={tab}/>
                )
            }
        </ul>

    );
};
export default NavTab;