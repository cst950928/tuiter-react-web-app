import {createSlice} from "@reduxjs/toolkit";
import profileData from "../profile/profile.json"

const profileSlice = createSlice({
    name: "profile",
    initialState: profileData,
    reducers: {
        updateProfile (state, action) {
            console.log({...state, ...action.payload})
            return {...state, ...action.payload}
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
