import React from "react";
import EditHeader from "./edit-header";
import EditBody from "./edit-body";

const EditProfile = () => {
    return (
       <div className={`border border-muted`}>
           <EditHeader/>
           <EditBody/>
       </div>
    )
}

export default EditProfile;