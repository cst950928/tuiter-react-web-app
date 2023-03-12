import React, {useState} from "react";
import {GrClose} from "react-icons/gr"
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {AiFillCloseCircle, AiOutlineRight} from "react-icons/ai";
import {MdAddAPhoto} from "react-icons/md";
import {updateProfile} from "../reducers/profile-reducer";
import EditItem from "./edit-item";
const EditHeader = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile)
    // const [name, setName] = useState(profile.firstName + ' ' + profile.lastName);
    // const [bio, setBio] = useState(profile.bio)
    // const [location, setLocation] = useState(profile.location);
    // const [website, setWebsite] = useState(profile.website);
    const [birthMonth, setBirthMonth] = useState(profile.dateOfBirth.split('/')[0]);
    const [birthDay, setBirthDay] = useState(profile.dateOfBirth.split('/')[1]);
    const [birthYear, setBirthYear] = useState(profile.dateOfBirth.split('/')[2]);
    const [editDOB, setEditDOB] = useState(false);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const duration = 100
    const startYear = today.getFullYear() - duration;
    const years = Array.from(new Array(duration + 1),(val, index) => index + startYear);
    const days = Array.from(new Array(31), (val, index) => index + 1);

    const [profile_, setProfile_] = useState({...profile, "name": profile.firstName + ' ' + profile.lastName});
    const editFields = [
        {
            id: "name",
            multiLine: false,
        },
        {
            id: "bio",
            multiLine: true,
        },
        {
            id: "location",
            multiLine: false,
        },
        {
            id: "website",
            multiLine: false,
        }
    ]
    const handleClick = () => {
        const name = profile_.name;
        const newProfile = {
            firstName: name.split(' ')[0],
            lastName: name.split(' ')[1],
            bio: profile_.bio,
            location: profile_.location,
            website : profile_.website,
            dateOfBirth: birthMonth + "/" + birthDay + "/" + birthYear,
        }
        dispatch(updateProfile(newProfile));
    }

    return (
        <div>
            <div className={`row mt-2 mb-2 d-flex align-items-center`}>
                <div className={`col-1`}>
                    <Link to="../profile">
                        <GrClose className={`ms-3`}/>
                    </Link>
                </div>
                <div className={`col-8`}>
                    <h5 className={`fw-bold p-0 m-0`}>Edit profile</h5>
                </div>
                <div className={`col d-flex justify-content-end me-3`}>
                    <Link to="../profile">
                        <button className={`btn btn-dark rounded-pill ps-3 pe-3 fw-bold`} onClick={handleClick}>Save</button>
                    </Link>
                </div>
            </div>
            <div className={`pb-5`}>
                <div className={`position-relative`}>
                    <img src={`/images/${profile.bannerPicture}`} alt={`banner`} className={`banner-img`}/>
                    <div className={`banner-img banner-cover position-absolute`}></div>
                    <AiFillCloseCircle className={`position-absolute banner-icon-x`} size={30}/>
                    <MdAddAPhoto className={`position-absolute banner-icon-x banner-icon-photo`} size={30}/>
                    <img src={`/images/${profile.profilePicture}`} alt={`profile`} className={`profile-img rounded-circle position-absolute`}/>
                    <div className={`profile-img profile-cover position-absolute rounded-circle`}></div>
                    <MdAddAPhoto className={`position-absolute profile-icon`} size={30}/>
                </div>
                <div className={`input-div w-100 ps-4`}>
                    {editFields.map(field => <EditItem key={field.id} profile={profile_} field={field} setProfile={setProfile_}/>)}

                    <div className={`w-100 row mt-4`}>
                        <div className={`col pt-2 text-muted ms-2 me-2 light-bold rounded-2`}>
                            <div>Birth date ·
                                {!editDOB && <span className={`wd-blue`} onClick={() => setEditDOB(true)}> Edit</span>}
                                {editDOB && <span className={`wd-blue`} onClick={() => setEditDOB(false)}> Done</span>}
                            </div>
                            {!editDOB &&
                                <div className={`text-dark wd-medium-size`}>
                                    {months[birthMonth - 1]} {birthDay}, {birthYear}
                                </div>
                            }
                        </div>
                        {editDOB &&
                            <div className={`mt-3 row`}>
                                <div className={`col border border-muted p-2 text-muted ms-2 me-2 light-bold rounded-2`}>
                                    <label htmlFor={"select-month"} className={`ps-1`}>
                                        Month
                                    </label>
                                    <br/>
                                    <select id="select-month" value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
                                        {months.map((m, id) =>
                                            <option value={id + 1}>{m}</option>)}
                                    </select>
                                </div>
                                <div className={`col border border-muted p-2 text-muted ms-2 me-2 light-bold rounded-2`}>
                                    <label htmlFor={"select-day"} className={`ps-1`}>
                                        Day
                                    </label>
                                    <br/>
                                    <select id="select-day" value={birthDay} onChange={(e) => setBirthDay(e.target.value)}>
                                        {days.map((d) => <option value={d}>{d}</option>)}
                                    </select>
                                </div>
                                <div className={`col border border-muted p-2 text-muted ms-2 me-2 light-bold rounded-2`}>
                                    <label htmlFor={"select-year"} className={`ps-1`}>
                                        Year
                                    </label>
                                    <br/>
                                    <select id="select-year" value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
                                        {years.map((y) =>
                                            <option value={y}>{y}</option>)}
                                    </select>
                                </div>
                            </div>
                        }
                    </div>

                    <div className={`w-100 row mt-3`}>
                        <div className={`col-10 pt-2 ms-2 me-2 light-bold rounded-2 d-flex align-items-center`}>
                            <p className={`m-0 wd-medium-size`}>Switch to professional</p>
                        </div>
                        <div className={`col d-flex justify-content-end align-items-center`}>
                            <AiOutlineRight className={`text-muted`}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default EditHeader;