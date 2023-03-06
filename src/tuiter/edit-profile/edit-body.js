import React from "react";
import './index.css'
import {AiFillCloseCircle, AiOutlineRight} from "react-icons/ai"
import {MdAddAPhoto} from "react-icons/md"
const EditBody = () => {
    return (
        <div className={`pb-5`}>
            <div className={`position-relative`}>
                <img src="/images/banner.jpeg" className={`banner-img`}/>
                <div className={`banner-img banner-cover position-absolute`}></div>
                <AiFillCloseCircle className={`position-absolute banner-icon-x`} size={30}/>
                <MdAddAPhoto className={`position-absolute banner-icon-x banner-icon-photo`} size={30}/>
                <img src="/images/react-blue.png" className={`profile-img rounded-circle position-absolute`}/>
                <div className={`profile-img profile-cover position-absolute rounded-circle`}></div>
                <MdAddAPhoto className={`position-absolute profile-icon`} size={30}/>
            </div>
            <div className={`input-div w-100 ps-4`}>
                <div className={`w-100 row`}>
                    <label className={`col border border-muted pt-2 text-muted ms-2 me-2 light-bold rounded-2`}>
                        Name
                        <input type="text"
                               className={`d-block border-0 ps-0 pe-0 pb-2 w-100`}
                               value="Shutong Chen"/>
                    </label>
                </div>

                <div className={`w-100 row mt-4`}>
                    <label className={`col border border-muted pt-2 text-muted ms-2 me-2 light-bold rounded-2`}>
                        Bio
                        <textarea type="text"
                               className={`d-block border-0 ps-0 pe-0 pb-2 w-100 wd-no-resize`}
                               value="Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retweets and likes are not endorsements."/>
                    </label>
                </div>

                <div className={`w-100 row mt-4`}>
                    <label className={`col border border-muted pt-2 text-muted ms-2 me-2 light-bold rounded-2`}>
                        Location
                        <input type="text"
                               className={`d-block border-0 ps-0 pe-0 pb-2 w-100`}
                               value="Boston, MA"/>
                    </label>
                </div>

                <div className={`w-100 row mt-4`}>
                    <label className={`col border border-muted pt-2 text-muted ms-2 me-2 light-bold rounded-2`}>
                        <input type="text"
                               className={`d-block border-0 ps-0 pe-0 pb-2 w-100`}
                               placeholder='Website'
                               value=""/>
                    </label>
                </div>

                <div className={`w-100 row mt-4`}>
                    <div className={`col pt-2 text-muted ms-2 me-2 light-bold rounded-2`}>
                        <div>Birth date Edit</div>
                    </div>
                </div>

                <div className={`w-100 row mt-4`}>
                    <div className={`col-10 pt-2 ms-2 me-2 light-bold rounded-2 d-flex align-items-center`}>
                        <p className={`m-0`}>Switch to professional</p>
                    </div>
                    <div className={`col d-flex justify-content-end align-items-center`}>
                        <AiOutlineRight className={`text-muted`}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditBody;