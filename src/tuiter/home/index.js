import React from "react";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening"
import {configureStore} from "@reduxjs/toolkit";
import tuitsReducer from "../tuits/tuits-reducer";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {tuitsData: tuitsReducer}
});
const HomeComponent2 = () => {
    return (
        <Provider store={store}>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </Provider>

    );
};

export default HomeComponent2;