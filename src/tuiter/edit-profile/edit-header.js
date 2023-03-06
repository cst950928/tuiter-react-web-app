import React from "react";
import {GrClose} from "react-icons/gr"
const EditHeader = () => {
    return (
        <div className={`row mt-2 mb-2 d-flex align-items-center`}>
            <div className={`col-1`}>
                <GrClose className={`ms-3`}/>
            </div>
            <div className={`col-8`}>
                <h5 className={`fw-bold p-0 m-0`}>Edit profile</h5>
            </div>
            <div className={`col d-flex justify-content-end me-3`}>
                <button className={`btn btn-dark rounded-pill ps-3 pe-3 fw-bold`}>Save</button>
            </div>
        </div>
    )
}

export default EditHeader;