import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Students from "./Pages/Students";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Students />} path='/students' />
        </Routes>
    )
}

export default AppRouter