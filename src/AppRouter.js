import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { GlobalStyle } from "./Styles/global";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/' />
        </Routes>
        <GlobalStyle imgUrl={'./assets/image/hogwarts-b.jpg'}/>
        </BrowserRouter>
    )
}

export default AppRouter